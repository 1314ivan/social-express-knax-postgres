const usersService = require('./users')
const sessions = require('./sessions')
class AuthService {
  async login(dto) {
    const user = await usersService.getOneBy('login', dto.login)
    if (!user) throw new Error('Пользователь не найден')
    if (!user.isCorrectPassword(dto.password)) throw new Error('Пароль неверный')
    return sessions.createSessions(user.get())
  }
  async register(dto) {
    console.log('register')
    const existedUser = await usersService.getOneBy('login', dto.login)
    console.log('existedUser')
    if (existedUser) throw new Error('Данный логин уже занят')
    const newUser = await usersService.createOne(dto)
    return sessions.createSessions(newUser.get())
  }
}
module.exports = new AuthService()
