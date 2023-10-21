import {usersService} from './users.services'
import { createSessions } from './sessions.services'
import {LoginDto} from '../dto/auth/login.dto'
import {CreateUserDto} from '../dto/users/createUser.dto'
class AuthService {
  async login(dto: LoginDto) {
    const user = await usersService.getOneBy('login', dto.login)
    if (!user) throw new Error('Пользователь не найден')
    if (!user.isCorrectPassword(dto.password)) throw new Error('Пароль неверный')
    return createSessions(user.get())
  }
  async register(dto: CreateUserDto) {
    const existedUser = await usersService.getOneBy('login', dto.login)
    if (existedUser) throw new Error('Данный логин уже занят')
    const newUser = await usersService.createOne(dto)
    return createSessions(newUser.get())
  }
}
export const authService = new AuthService()
