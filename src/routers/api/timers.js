const express = require('express')
const router = express.Router()
const TimersController = require('../../controllers/timers')

module.exports = router.get('/', TimersController.getAll).get('/:name', TimersController.getOne).post('/:name', TimersController.addOne).patch('/:name', TimersController.stopOne)