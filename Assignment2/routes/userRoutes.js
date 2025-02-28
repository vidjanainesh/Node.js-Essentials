const express = require('express');

const bodyParser = require('body-parser');

const userController = require('../controllers/userControllers');
const { validateUser } = require('../middlewares/validateUser');

const router = express.Router();

router.use(bodyParser.urlencoded({extended:true}));

router.get('/create', userController.userInputForm);

router.post('/add-user', validateUser, userController.createUser);

module.exports = router;