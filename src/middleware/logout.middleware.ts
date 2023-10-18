import { delOne as sessionsDelOne } from '../services/sessions.services'
import { Request, Response, NextFunction } from 'express'
export = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sessionId = req.cookies['sessionId']
    if (sessionId) await sessionsDelOne(sessionId)
    next()
  } catch (error) {
    res.clearCookie('sessionId').status(403)
  }
}
