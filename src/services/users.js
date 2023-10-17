const {nanoid} = require('nanoid')

const users = [
  { id: 12, login: 'Ivan', password: 'Welcome1' },
  { id: 13, login: 'LOL', password: 'Welcome1' }
]

class UsersService {
  async getAll() {
    return users
  }
  async getOneBy(by, item) {
    
    return users.find(user => user[by] == item)
  }
  async createOne(dto) {
    const id = nanoid()
    const user = { ...dto, id }
    users.push(user)
    return user
  }
}
module.exports = new UsersService()
