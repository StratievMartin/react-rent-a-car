const express = require('express')
const rentController = require('../controllers/rentController')
const router = express.Router()

router.get('/rents', rentController.all_rents)
router.get('/rents/:id', rentController.rent_details)
router.post('/add-rent', rentController.create_rent)
router.put('/update-rent/:id', rentController.update_rent)
router.delete('/delete-rent/:id', rentController.delete_rent)

module.exports = router