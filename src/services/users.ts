import db from '../db/config'
import { User } from '../db/tables/user'
import rolesService from './roles'

class UsersService {
  async getAll() {
    const users = await db.select().table('users')
    return users
  }
  async getOneBy(by: 'login' | 'id', value: string | number): Promise<User> {
    const user = await db
      .select()
      .table('users')
      .where({ [by]: value })
      .then(data => data[0])
    return user ? new User(user) : null
  }
  async createOne(dto) {
    const userRole = await rolesService.getOne('code', 'user')
    const [{ id }] = await db('users')
      .insert(new User({ ...dto, role_id: userRole.id }))
      .returning('id')
    return this.getOneBy('id', id)
  }
}
export = new UsersService()
