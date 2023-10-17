const express = require('express')
const router = express.Router()
const UsersController = require('../../controllers/users')

module.exports = router.get('/', UsersController.getAll).get('/:id', UsersController.getOneById)
