import commonService from '../services/common.services'
import { Request, Response } from 'express'
export class CommonController {
  static async ping(req: Request, res: Response): Promise<void> {
    const ping = await commonService.ping()
    res.send(ping).status(200)
  }
}
