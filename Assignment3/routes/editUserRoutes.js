const express = require('express');
const router = express();

const userControllers = require('../controllers/userControllers');

router.post('/edit/:id', userControllers.editUserForm);
router.post('/edit-user', userControllers.editUser);

module.exports = router;