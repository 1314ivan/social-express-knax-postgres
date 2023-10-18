import express from 'express'
const router = express.Router()
import { RolesController } from '../../controllers/roles'
import rbac from '../../middleware/rbac'
export = router.post('/',rbac, RolesController.create)
