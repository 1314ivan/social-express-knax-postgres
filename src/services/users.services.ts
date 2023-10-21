import { CreateUserDto } from '../dto/users/createUser.dto'
import db from '../db/config'
import { User } from '../db/tables/user.entity'
import rolesService from './roles.services'

class UsersService {
  async getAll() {
    const users = await db.select().table('users')
    return users
  }
  async getOneBy(by: 'login' | 'id', value: string | number): Promise<User | null> {
    const user = await db
      .select()
      .table('users')
      .where({ [by]: value })
      .then(data => data[0])
    return user ? new User(user) : null
  }
  async createOne(dto: CreateUserDto) {
    const userRole = await rolesService.getOne('code', 'user')
    if (!userRole) throw new Error('Отсутствует роль user')
    const [{ id }] = await db('users')
      .insert({ ...dto, role_id: userRole.id })
      .returning('id')

    const newUser = await this.getOneBy('id', id)
    if (!newUser) throw new Error('Внутренняя ошибка получения пользователя')
    return newUser
  }
}
export const usersService = new UsersService()
 