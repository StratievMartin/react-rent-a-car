const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

router.get('/user/:id', userController)
router.get('/add-user', userController)
router.delete('/user/:id', userController)

module.exports = router