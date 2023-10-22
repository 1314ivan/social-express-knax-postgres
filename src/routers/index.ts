// import sessionChecker from '../middleware/sessionChecker.middleware'

// import {Application} from 'express'
// export const api = function (app: Application) {
//   const commonApi = ['common', 'auth']
//   const api = ['users', 'roles']

//   for (let apiRoute of commonApi) {
//     let prefix = `/api/${apiRoute}`
//     app.use(prefix, require(`.${prefix}`))
//   }
//   for (let apiRoute of api) {
//     let prefix = `/api/${apiRoute}`
//     app.use(prefix, (sessionChecker as any), require(`.${prefix}`))
//   }
// }
import sessionChecker from '../middleware/sessionChecker.middleware'
import { Application, Router } from 'express'
import auth from './api/auth'
import users from './api/users'
import roles from './api/roles'
import common from './api/common'
export const api = function (app: Application) {
  const commonApi: { [key: string]: Router } = { auth, common }

  const api: { [key: string]: Router } = {
    users,
    roles
  }

  for (const route in api) {
    if (Object.prototype.hasOwnProperty.call(api, route)) {
      const prefix = `/api/${route}`
      app.use(prefix, sessionChecker as any, api[route])
    }
  }
  for (const route in commonApi) {
    if (Object.prototype.hasOwnProperty.call(commonApi, route)) {
      const prefix = `/api/${route}`
      app.use(prefix, commonApi[route])
    }
  }

  // // for (let apiRoute of api) {
  // //   let prefix = `/api/${apiRoute}`
  // //   app.use(prefix, sessionChecker as any, require(`.${prefix}`))
  // // }
  // // app.use('/api/auth', authApi)
  //   for (let route in api ) {
  //         let prefix = `/api/${route}`
  //         app.use(prefix, api[route])
  //     //     app.use(prefix, (sessionChecker as any), require(`.${prefix}`))
  //     //   }

  //   // const api = ['users', 'roles']
  // }
}
