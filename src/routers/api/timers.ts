import express from 'express'
const router = express.Router()
import {TimersController} from '../../controllers/timers'

export = router.get('/', TimersController.getAll).get('/:name', TimersController.getOne).post('/:name', TimersController.addOne).patch('/:name', TimersController.stopOne)