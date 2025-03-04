const express = require('express');
const sequelize = require('./config/database');

const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const User = require('./models/user');
const Order = require('./models/order');

const app = express();

// Set up the view engine and static file directory
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

// Register user and order routes
app.use(userRoutes);
app.use(orderRoutes);

// Handle 404 errors with a custom error page
app.use((req,res) => {
    res.status(404).render('404errorViews');
})

// Define relationships between models (One-to-Many: User -> Order)
User.hasMany(Order, {foreignKey: 'userid', onDelete: 'CASCADE'});
Order.belongsTo(User, {foreignKey: 'userid', onDelete: 'CASCADE'});

// Sync database and start the server
sequelize.sync({force: false})
    .then(() => {
        console.log('Database Connected');
        app.listen(3000, ()=>{
            console.log("Server Listening on PORT 3000");
        });
    })
    .catch(err => console.log(err));