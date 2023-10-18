import express from 'express'
const router = express.Router()
import { TimersController } from '../../controllers/timers'
import rbac from '../../middleware/rbac'
export = router
  .get('/', rbac, TimersController.getAll)
  .get('/:name', rbac, TimersController.getOne)
  .post('/:name', rbac, TimersController.addOne)
  .patch('/:name', rbac, TimersController.stopOne)
