import { Request, Response, NextFunction } from 'express'
import { IRequestSession } from '../interface/requestSession'
export default async (req: IRequestSession, res: Response, next: NextFunction) => {
  try {
    if (!req.user) throw new Error('Необходима авторизация')
    const router: any = req.originalUrl.split('/')[2]
    if (!req.user.permissions || !req.user.permissions[router] || !req.user.permissions[router][req.method])
      throw new Error('Запрет доступа')
    next()
  } catch (error) {
    res.send().status(403)
  }
}
 