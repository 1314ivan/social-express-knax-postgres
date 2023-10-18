import express from 'express'
const router = express.Router()
import { RolesController } from '../../controllers/roles'
import rbac from '../../middleware/rbac.middleware'
export = router.post('/', rbac as any, RolesController.create as any)
