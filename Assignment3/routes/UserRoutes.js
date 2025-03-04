const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/userControllers');
const { validateUser } = require('../middlewares/validateUser');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// Route to add a new user with validation middleware
router.post('/add-user', validateUser, userControllers.addUser);

// Route to display all users
router.get('/users', userControllers.displayUser);

// Route to display the edit user form
router.get('/edit/:id', userControllers.editUserForm);

// Route to handle user updates
router.post('/edit/:id', userControllers.editUser);

// Route to delete a user
router.post('/delete/:id', userControllers.deleteUser);

// Route for the home page
router.get('/', userControllers.homePageForm);

module.exports = router;