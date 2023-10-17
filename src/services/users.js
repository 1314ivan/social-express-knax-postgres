const { nanoid } = require('nanoid')
const { db } = require('../db/config')
const User = require('../db/tables/user')

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
module.exports = new UsersService()
