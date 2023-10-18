import { nanoid } from 'nanoid'
import { Session } from '../db/tables/session'
import db from '../db/config'
import { User } from 'src/db/tables/user'
const data = {}

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
export async function delOne(sessionId) {

  delete data[sessionId] 
}

// export = { createSessions, getOne, delOne }
