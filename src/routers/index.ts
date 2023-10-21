import sessionChecker from '../middleware/sessionChecker.middleware'
import {Application} from 'express'
import { authApi } from './api/auth'
module.exports = function (app: Application) {
  app.use('api/auth', authApi)

  
  // const api = ['users', 'roles']

}
