import express from 'express'
const router = express.Router()
import { RolesController } from '../../controllers/roles'
import rbac from '../../middleware/rbac.middleware'
export = router.post('/', rbac, RolesController.create)
