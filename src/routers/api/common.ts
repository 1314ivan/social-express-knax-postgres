import express from 'express'
const router = express.Router()
import {CommonController} from '../../controllers/common'


module.exports = router.get('/ping', CommonController.ping)
     