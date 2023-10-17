import { nanoid } from 'nanoid'
const data = {}

export async function createSessions(user): Promise<string> {
  const sessionId = nanoid()
  data[sessionId] = user
  return sessionId
}
export async function getOne(sessionId) {
  return data[sessionId]
}
export async function delOne(sessionId) {
  delete data[sessionId]
}

// export = { createSessions, getOne, delOne }
