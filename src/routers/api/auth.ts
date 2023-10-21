import express from 'express'
const router = express.Router()
import { login, register, logout } from '../../controllers/auth'
import sessionChecker from '../../middleware/sessionChecker.middleware'
import logoutMiddleware from '../../middleware/logout.middleware'



export const authApi = router
  .post('/login', logoutMiddleware,(req, res, next) => {

   // #swagger.tags = ['auth']
   // #swagger.path = `api/auth/login`
    // #swagger.description = 'Some description...'
    next()
  }, login)
  .post('/register', logoutMiddleware, register)
  .delete('/logout', sessionChecker as any, logout as any)
