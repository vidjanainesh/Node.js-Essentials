const { Sequelize } = require('sequelize');

const sequelize = require('../config/database');

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