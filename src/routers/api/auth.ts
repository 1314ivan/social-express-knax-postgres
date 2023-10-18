import express from 'express'
const router = express.Router()
import { AuthController } from '../../controllers/auth'
import sessionChecker from '../../middleware/sessionChecker.middleware'
import logout from '../../middleware/logout.middleware'

export = router
  .post('/login', logout, AuthController.login)
  .post('/register', logout, AuthController.register)
  .delete('/logout', sessionChecker, AuthController.logout)
