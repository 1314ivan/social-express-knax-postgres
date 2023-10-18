import { IRequestSession } from '../interface/requestSession'
import LoginDto from '../dto/auth/login.dto'
import CreateUserDto from '../dto/users/createUser.dto'
import authService from '../services/auth.services'
import { delOne as delOneSessions } from '../services/sessions.services'
import { Request, Response } from 'express'
import { resError } from '../utils/resError'
export class AuthController {
  static async login(req: Request, res: Response): Promise<void> {
    try {
      const sessionId = await authService.login(new LoginDto(req.body))
      res.cookie('sessionId', sessionId).status(200).send('ok')
    } catch (err) {
      resError(res, err)
    }
  }
  static async register(req: Request, res: Response): Promise<void> {
    try {
      const sessionId = await authService.register(new CreateUserDto(req.body))
      res.cookie('sessionId', sessionId).status(200).send('ok')
    } catch (err) {
      resError(res, err)
    }
  }
  static async logout(req: IRequestSession, res: Response): Promise<void> {
    try {
      await delOneSessions(req.sessionId)
      res.clearCookie('sessionId').status(200).send('ok')
    } catch (err) {
      resError(res, err)
    }
  }
}
