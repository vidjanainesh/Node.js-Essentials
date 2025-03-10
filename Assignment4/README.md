# Setup Instructions

1) Prerequisites:

> Node.js
> npm
> PostgreSQL database

2) Initialize the project:

> npm init

3) Install dependencies:

> npm install express 
> npm install nodemon 
> npm install ejs 
> npm install sequelize  
> npm install pg pg-hstore   

4) Configure the database connection:

- Create a config/database.js file and add:

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

5) Set up the server:

> Configure Express, routes, models, view engine, and error handling.
> Define relationships between models (User-Order: One-to-Many).
> Sync the database and start the server.

6) Start the application:

> npm start

