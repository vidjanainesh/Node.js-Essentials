const express = require('express');

const bodyParser = require('body-parser');

const userController = require('../controllers/userControllers');
const { validateUser } = require('../middlewares/validateUser');

const router = express.Router();

router.use(bodyParser.urlencoded({extended:true}));

// Route to get the user creation form
router.get('/create', userController.userInputForm);

// Route to add a new user with validation middleware
router.post('/add-user', validateUser, userController.createUser);

module.exports = router;