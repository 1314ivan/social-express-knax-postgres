import express from 'express'
const router = express.Router()
import { UsersController } from '../../controllers/users'
import rbac from '../../middleware/rbac.middleware'

export = router.get('/', rbac, UsersController.getAll).get('/:id', rbac, UsersController.getOneById)
