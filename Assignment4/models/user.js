const { Sequelize } = require('sequelize');

const sequelize = require('../config/database');

// Define the User model with fields and constraints
const User = sequelize.define('user', {
    userid : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    fname: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    lname : {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;