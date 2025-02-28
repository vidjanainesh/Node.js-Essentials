const express = require('express');

const router = express.Router();

const userController = require('../controllers/userControllers');

router.get('/view-users', userController.viewUsers);

module.exports = router;