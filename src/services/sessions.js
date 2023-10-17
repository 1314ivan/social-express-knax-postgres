const {nanoid} = require('nanoid')

const data = {}

const createSessions = async user => {
  const sessionId = nanoid()
  data[sessionId] = user
  return sessionId
}
const getOne = async sessionId => {
  return data[sessionId]
}
const delOne = async sessionId => {
  delete data[sessionId]
}
module.exports = { createSessions, getOne, delOne }
