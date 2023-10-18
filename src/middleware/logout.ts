import { delOne as sessionsDelOne } from '../services/sessions'
export = async (req, res, next) => {
  try {
    const sessionId = req.cookies['sessionId']
    if (sessionId) await sessionsDelOne(sessionId)
    next()
  } catch (error) {
    res.clearCookie('sessionId').send(error.message).status(403)
  }
}
