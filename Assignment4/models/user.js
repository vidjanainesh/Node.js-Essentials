const { Sequelize } = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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