import express from 'express'
const router = express.Router()
import { UsersController } from '../../controllers/users'
import rbac from '../../middleware/rbac.middleware'

export default router
  .get('/', rbac as any, UsersController.getAll as any)
  .get('/:id', rbac as any, UsersController.getOneById as any)
