const express = require('express');

const router = express.Router();

const userController = require('../controllers/userControllers');

// Route to display all users
router.get('/view-users', userController.viewUsers);

module.exports = router;