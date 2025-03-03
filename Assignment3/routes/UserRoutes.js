const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/userControllers');
const { validateUser } = require('../middlewares/validateUser');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));

router.post('/add-user', validateUser, userControllers.addUser);

router.get('/users', userControllers.displayUser);

router.get('/edit/:id', userControllers.editUserForm);
router.post('/edit/:id', userControllers.editUser);

router.post('/delete/:id', userControllers.deleteUser);

router.get('/', userControllers.homePageForm);

module.exports = router;