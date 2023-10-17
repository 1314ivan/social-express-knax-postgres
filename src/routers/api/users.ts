import express from 'express'
const router = express.Router()
import {UsersController} from '../../controllers/users'


export = router.get('/', UsersController.getAll).get('/:id', UsersController.getOneById)
