import { resError } from '../utils/resError'
import { IRequestSession } from '../interface/requestSession'
import {usersService} from '../services/users.services'
import { Response } from 'express'
export class UsersController {
  static async getAll(req: IRequestSession, res: Response) {
    try {
      const users = await usersService.getAll()
      res.send(users).status(200)
    } catch (err) {
      resError(res, err)
    }
  }

  static async getOneById(req: IRequestSession, res: Response) {
    try {
      const user = await usersService.getOneBy('id', req.params.id)
      res.send(user).status(200)
    } catch (err) {
      resError(res, err)
    }
  }
}
