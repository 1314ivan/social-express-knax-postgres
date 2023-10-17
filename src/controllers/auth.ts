const LoginDto = require('../dto/auth/login')
const CreateUserDto = require('../dto/users/createUser')
const authService = require('../services/auth')
const sessions = require('../services/sessions')

export  class AuthController {
  static async login(req, res) {
    try {
      const sessionId = await authService.login(new LoginDto(req.body), res)
      res.cookie('sessionId', sessionId).status(200).send('ok')
    } catch (err) {
      console.error(err.message)
      res.status(500).send(err.message)
    }
  }
  static async register(req, res) {
    try {
      const sessionId = await authService.register(new CreateUserDto(req.body))
      res.cookie('sessionId', sessionId).status(200).send('ok')
    } catch (err) {
      console.error(err.message)
      res.status(500).send(err.message)
    }
  }
  static async logout(req, res,) {
    try {
      await sessions.delOne(req.sessionId)
      res.clearCookie('sessionId').status(200).send('ok')
    } catch (err) {
      console.error(err.message)
      res.status(500).send(err.message)
    }
  }
}
