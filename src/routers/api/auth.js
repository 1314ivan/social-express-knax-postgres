const express = require('express')
const router = express.Router()
const AuthController = require('../../controllers/auth')
const sessionChecker = require('../../middleware/sessionChecker')

module.exports = router
  .post('/login', AuthController.login)
  .post('/register', AuthController.register)
  .delete('/logout', sessionChecker, AuthController.logout)
