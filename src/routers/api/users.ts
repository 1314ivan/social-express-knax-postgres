import express from 'express'
const router = express.Router()
import { UsersController } from '../../controllers/users'
import rbac from '../../middleware/rbac.middleware'

export default router
  .get('/', rbac as any,(req, res, next) => {
    /**
     * #swagger.tags = ["users"]
       #swagger.path = `api/users`
       #swagger.description = "Вывод всех пользователей"
  
       #swagger.responses[200] = {
        description: 'Массив пользователей',
        schema: { $ref: '#/definitions/users' }
       }
       */
    next()
  }, UsersController.getAll as any)
  .get('/:id', rbac as any, UsersController.getOneById as any)
