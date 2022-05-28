const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/check-email/:id', userController.check_email);
router.get('/users', userController.all_users);
router.get('/users/:id', userController.user_details);
router.post('/add-user', userController.create_user);
router.put('/update-user/:id', userController.update_user);
router.delete('/delete-user/:id', userController.delete_user);

module.exports = router;
