const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/userControllers');

router.post('/delete/:id', userControllers.deleteUser);

module.exports = router;