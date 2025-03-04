const express = require('express');
const router = express.Router();

const orderControllers = require('../controllers/orderControllers');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// Route to display order creation form
router.get('/add-orders', orderControllers.addOrderForm);

// Route to handle order creation
router.post('/add-orders', orderControllers.addOrder);

// Route to display all orders
router.get('/view-orders', orderControllers.displayOrder);

module.exports = router;