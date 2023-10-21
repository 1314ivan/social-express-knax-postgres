import { IRequestSession } from '../interface/requestSession'
import {LoginDto} from '../dto/auth/login.dto'
import {CreateUserDto} from '../dto/users/createUser.dto'
import authService from '../services/auth.services'
import { delOne as delOneSessions } from '../services/sessions.services'
import { Request, Response } from 'express'
import { resError } from '../utils/resError'
export  async function login(req: Request, res: Response){     
    //const tag = api
   // #swagger.tags = ['SomeTag']
   // #swagger.path = `${tag}/auth/login`
    // #swagger.description = 'Some description...'

    try {

      const sessionId = await authService.login(new LoginDto(req.body))
      res.cookie('sessionId', sessionId).status(200).send('ok')
    } catch (err) {
      resError(res, err)
    }
  }
  export  async function register(req: Request, res: Response): Promise<void> {
    try {
      const sessionId = await authService.register(new CreateUserDto(req.body))
      res.cookie('sessionId', sessionId).status(200).send('ok')
    } catch (err) {
      resError(res, err)
    }
  }
  export  async function logout(req: IRequestSession, res: Response): Promise<void> {
    try {
      await delOneSessions(req.sessionId)
      res.clearCookie('sessionId').status(200).send('ok')
    } catch (err) {
      resError(res, err) 
    } 
  }

