import express from 'express'
const router = express.Router()
import {CommonController} from '../../controllers/common'


export default router.get('/ping', CommonController.ping)
     