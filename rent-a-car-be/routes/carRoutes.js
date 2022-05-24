const express = require('express')
const carController = require('../controllers/carController')
const router = express.Router()

router.get('/cars', carController.all_cars)
router.get('/cars/:id', carController.car_details)
router.post('/add-car', carController.create_car)
router.put('/update-car/:id', carController.update_car)
router.put('/rent-a-car/:id', carController.rent_a_car)
router.put('/return-a-car/:id', carController.return_a_car)
router.delete('/delete-car/:id', carController.delete_car)

module.exports = router