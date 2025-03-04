const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/userControllers');
const { validateUser } = require('../middlewares/validateUser');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// Route to display user creation form
router.get('/create', userControllers.addUserForm);

// Route to handle user creation with validation
router.post('/create', validateUser, userControllers.addUser);

// Route to display all users
router.get('/users', userControllers.displayUser);

// Route to display user edit form
router.get('/edit/:id', userControllers.editUserForm);

// Route to handle user updates
router.post('/edit/:id', userControllers.editUser);

// Route to handle user deletion
router.post('/delete/:id', userControllers.deleteUser);

// Route for the homepage
router.get('/', userControllers.homePage);

module.exports = router;