import express from 'express'
const router = express.Router()
import { RolesController } from '../../controllers/roles'

export = router.post('/', RolesController.create)
