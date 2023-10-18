import sessionChecker from '../middleware/sessionChecker.middleware'

import {Application} from 'express'
export = function (app: Application) {
  const commonApi = ['common', 'auth']
  const api = ['users', 'roles']

  for (let apiRoute of commonApi) {
    let prefix = `/api/${apiRoute}`
    app.use(prefix, require(`.${prefix}`))
  }
  for (let apiRoute of api) {
    let prefix = `/api/${apiRoute}`
    app.use(prefix, (sessionChecker as any), require(`.${prefix}`))
  }
}
