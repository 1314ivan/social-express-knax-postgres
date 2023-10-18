import { IRequestSession } from 'src/interface/requestSession'
import { Request, Response, NextFunction } from 'express'
import { getOne } from '../services/sessions.services'
import { IUserSession } from 'src/interface/userSesion.dto'
export = async (req: IRequestSession, res: Response, next: NextFunction): Promise<void> => {
  try {
    const sessionId = req.cookies['sessionId']
    if (!sessionId) throw new Error('no sessionId')
    const user:IUserSession = await getOne(sessionId)
    if (!user) throw new Error('no user by sessionId')
   
    req.user = user
    req.sessionId = sessionId
    next()
  } catch (error) {
    res.clearCookie('sessionId').send().status(403)
  }
}
