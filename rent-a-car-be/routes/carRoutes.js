const express = require('express')
const carController = require('../controllers/carController')
const router = express.Router()

router.get('/cars', carController.car_index)
router.get('/cars/:id', carController.car_details)
router.get('/add-car', carController.car_create_get)
router.delete('/car/:id', carController.car_delete)

module.exports = router