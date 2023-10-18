import { nanoid } from 'nanoid'
import { Session } from '../db/tables/session.entity'
import db from '../db/config'
import permissionsService from './permissions.services'
import { IGetUser } from '../db/tables/user.entity'
import { IPermissionSessions } from '../interface/permissionSessions'
const maxConnect = process.env.MAX_CONNECT || 5
export async function createSessions(user: IGetUser): Promise<string> {
  const permissions = await permissionsService.getAllByRoles(user.role_id)
  const permissionsSession :{ [key: string]: IPermissionSessions }[]  = Object.fromEntries(
    permissions.map(el => [el.router_code, { GET: el.GET, POST: el.POST, PATCH: el.PATCH, DELETE: el.DELETE }])
  )
  const [{ session_id }] = await db('sessions')
    .insert(new Session({ session_id: nanoid(), data:{...user, permissions: permissionsSession} , user_id: user.id }))
    .returning('session_id')
  const { sessionsUserCount } = await db
    .select()
    .table('sessions')
    .count('*', { as: 'sessionsUserCount' })
    .where({ user_id: user.id })
    .then(data => data[0])
  if (sessionsUserCount > maxConnect) {
    const sessionsOld = await db
      .select()
      .table('sessions')
      .where({ user_id: user.id })
      .limit(+sessionsUserCount - +maxConnect)
      await  db('sessions').delete().whereIn('id', sessionsOld.map(el=>el.id))
  }
  
  return session_id
}

export async function getOne(session_id: string) {
  const { data } = await db
    .select('data')
    .table('sessions')
    .where({ session_id })
    .then(data => data[0])
  return data
}
export async function delOne(session_id: string) {
  return db('sessions').delete().where({ session_id })
}
