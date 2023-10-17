
import express from 'express'
const router = express.Router()
import {AuthController} from '../../controllers/auth'
import sessionChecker from '../../middleware/sessionChecker'



export = router
  .post('/login', AuthController.login)
  .post('/register', AuthController.register)
  .delete('/logout', sessionChecker, AuthController.logout)
