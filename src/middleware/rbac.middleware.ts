
export = async (req, res, next) => {
  try {
    if (!req.user) throw new Error("Необходима авторизация")
    const router = req.originalUrl.split("/")[2]
    if(!req.user.permissions || !req.user.permissions[router] || !req.user.permissions[router][req.method]) throw new Error("Запрет доступа")
    next()
  } catch (error) {
    res.send(error.message).status(403)
  }
}