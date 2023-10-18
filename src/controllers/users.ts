import usersService from '../services/users.services'

export class UsersController {
  static async getAll(req, res) {
    try {
      const users = await usersService.getAll()
      console.log(req.user)
      res.send(users).status(200)
    } catch (err) {
      console.error(err.message)
      res.status(500).send(err.message)
    }
  }

  static async getOneById(req, res) {
    try {
      const user = await usersService.getOneBy('id', req.params.id)
      res.send(user).status(200)
    } catch (err) {
      console.error(err.message)
      res.status(500).send(err.message)
    }
  }
}
