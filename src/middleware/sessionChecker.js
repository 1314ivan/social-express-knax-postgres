const { getOne } = require('../services/sessions')

module.exports = async (req, res, next) => {
  try {
    console.log(req.cookies)
    const sessionId = req.cookies['sessionId']
    if (!sessionId) throw new Error('no sessionId')
    const user = await getOne(sessionId)
    if (!user) throw new Error('no user by sessionId')
    req.user = user
    req.sessionId = sessionId
    next()
  } catch (error) {
    res.clearCookie('sessionId').send(error.message).status(403)
  }
}
