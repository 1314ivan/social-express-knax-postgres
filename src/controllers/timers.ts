const timersService = require('../services/timers')

export  class TimersController {
  static async getAll(req, res) {
    try {
      const timers = timersService.getAll()
      res.send(timers).status(200)
    } catch (err) {
      res.send(err.message).status(401)
    }
  }
  static async getOne(req, res) {
    try {
      const timer = timersService.getOne(req.params.name)
      res.send(timer).status(200)
    } catch (err) {
      res.send(err.message).status(401)
    }
  }
  static async addOne(req, res) {
    try {
      const timer = timersService.createTimer(req.params.name)
      res.send(timer).status(200)
    } catch (err) {
      res.send(err.message).status(401)
    }
  }
  static async stopOne(req, res) {
    try {
      const timer = timersService.stopTimer(req.params.name)
      res.send(timer).status(200)
    } catch (err) {
      res.send(err.message).status(401)
    }
  }
}

