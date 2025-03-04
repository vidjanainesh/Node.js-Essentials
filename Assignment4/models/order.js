const { Sequelize } = require('sequelize');

const sequelize = require('../config/database');

// Define the Order model with fields and constraints
const Order = sequelize.define('order', {
    orderid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    total_amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Order;