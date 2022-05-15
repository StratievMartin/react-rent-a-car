const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

router.get('/users', userController.user_index)
router.get('/users/:id', userController.user_details)
router.get('/add-user', userController.user_create_get)
router.delete('/user/:id', userController.user_details)

module.exports = router