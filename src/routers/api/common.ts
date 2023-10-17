import express from 'express'
const router = express.Router()
import {CommonController} from '../../controllers/common'


export = router.get('/ping', CommonController.ping)
