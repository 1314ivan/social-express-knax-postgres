const express = require('express')
const router = express.Router()
const CommonController = require('../../controllers/common')

module.exports = router.get('/ping', CommonController.ping)
