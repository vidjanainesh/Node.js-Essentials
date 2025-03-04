const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'Assignment4_UserManagement',
    'postgres',
    'root',
    {
        dialect: 'postgres',
        port: 5432,
        host: 'localhost'
    }
);

module.exports = sequelize;
