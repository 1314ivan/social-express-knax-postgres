import express from 'express'
const router = express.Router()
import { RolesController } from '../../controllers/roles'
import rbac from '../../middleware/rbac.middleware'
export default router.post('/', rbac as any, RolesController.create as any)
