const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/userControllers');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));



router.post('/add-user', userControllers.addUser);

module.exports = router;