import { nanoid } from 'nanoid'
import { Session } from '../db/tables/session'
import db from '../db/config'

export async function createSessions(user): Promise<string> {
  const [{ session_id }] = await db('sessions')
    .insert(new Session({ session_id: nanoid(), data: user, user_id: user.id }))
    .returning('session_id')
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
  return db('sessions').delete().where({session_id})
}
