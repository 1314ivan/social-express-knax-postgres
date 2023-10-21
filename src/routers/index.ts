import sessionChecker from '../middleware/sessionChecker.middleware'
import {Application} from 'express'
import { authApi } from './api/auth'
export const api = function (app: Application) {
  app.use('/api/auth', authApi)

  
  // const api = ['users', 'roles']

}
