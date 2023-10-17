
const { db } = require('../db/config')
import User from "../db/tables/user"

class UsersService {
  async getAll() {
    const users = await db.select().table('users')
    return users
  }
  async getOneBy(by, value) {
    const user = await db
      .select()
      .table('users')
      .where({ [by]: value })
      .then(data => data[0])
    return user ? new User(user) : null
  }
  async createOne(dto) {
    const [{ id }] = await db('users').insert(new User(dto)).returning('id')
    return this.getOneBy('id', id)
  }
}
export = new UsersService()
