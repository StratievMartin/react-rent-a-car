const express = require('express')
const rentController = require('../controllers/rentController')
const router = express.Router()

router.get('/rents', rentController.rent_index)
router.get('/rents/:id', rentController.rent_details)
router.get('/add-rent', rentController.rent_create_get)
router.delete('/rent/:id', rentController.rent_delete)

module.exports = router