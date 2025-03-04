const express = require('express');
const router = express.Router();

const orderControllers = require('../controllers/orderControllers');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));

router.get('/add-orders', orderControllers.addOrderForm);
router.post('/add-orders', orderControllers.addOrder);

router.get('/view-orders', orderControllers.displayOrder);

module.exports = router;