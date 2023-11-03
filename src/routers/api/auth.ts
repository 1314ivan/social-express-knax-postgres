import express from 'express'
const router = express.Router()
import { login, register, logout } from '../../controllers/auth'
import sessionChecker from '../../middleware/sessionChecker.middleware'
import logoutMiddleware from '../../middleware/logout.middleware'

export default router
  .post(
    '/login',
    logoutMiddleware,
    (req, res, next) => {
      /**
       * #swagger.tags = ["auth"]
         #swagger.path = `api/auth/login`
         #swagger.description = "Авторизация"
    
         #swagger.parameters['changes'] = {
          in: 'body',
          type: 'object',
          required: true,
          schema: { $ref: '#/definitions/login' }}
        #swagger.responses[200] = {
          description: 'Токен sessionId',
          schema: { $ref: '#/definitions/sessionId' }
        }
         */

      next()
    },
    login
  )
  .post(
    '/register',
    logoutMiddleware,
    (req, res, next) => {
      /**
     * #swagger.tags = ["auth"]
       #swagger.path = `api/auth/register`
       #swagger.description = "Регистрация"
  
       #swagger.parameters['changes'] = {
        in: 'body',
        type: 'object',
        required: true,
        schema: { $ref: '#/definitions/userCreate' }}
       }
       #swagger.responses[200] = {
          description: 'Токен sessionId',
          schema: { $ref: '#/definitions/sessionId' }
       }
       #swagger.responses[400] = {
          schema: { $ref: '#/definitions/register_BadRequest' }
       }
       */

      next()
    },
    register
  )
  .delete('/logout', sessionChecker as any, logout as any)
