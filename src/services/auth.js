const usersService = require('./users')
const sessions = require('./sessions')
const { db } = require('../db/config')
class AuthService {
  async login(dto) {
    const user = await usersService.getOneBy('login', dto.login)
    if (!user) throw new Error('Пользователь не найден')
    if (user.password !== dto.password) throw new Error('Пароль неверный')
    return sessions.createSessions(user)
  }
  async register(dto) {
    const users = await db.select().table('users')
    const existedUser = await usersService.getOneBy('login', dto.login)
    if (existedUser) throw new Error('Данный логин уже занят')
    const newUser = await usersService.createOne(dto)
    return sessions.createSessions(newUser)
  }
}
module.exports = new AuthService()
