import usersService from './users'
import { createSessions } from './sessions'
class AuthService {
  async login(dto) {
    const user = await usersService.getOneBy('login', dto.login)
    if (!user) throw new Error('Пользователь не найден')
    if (!user.isCorrectPassword(dto.password)) throw new Error('Пароль неверный')
    return createSessions(user.get())
  }
  async register(dto) {
    const existedUser = await usersService.getOneBy('login', dto.login)
    if (existedUser) throw new Error('Данный логин уже занят')
    const newUser = await usersService.createOne(dto)
    return createSessions(newUser.get())
  }
}
export = new AuthService()
