const express = require('express');
const sequelize = require('./config/database');

const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const { render } = require('ejs');
const User = require('./models/user');
const Order = require('./models/order');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.use(userRoutes);
app.use(orderRoutes);

app.use((req,res) => {
    res.status(404).render('404errorViews');
})

User.hasMany(Order, {foreignKey: 'userid', onDelete: 'CASCADE'});
Order.belongsTo(User, {foreignKey: 'userid', onDelete: 'CASCADE'});

sequelize.sync({force: false})
    .then(() => console.log('Database Connected'))
    .catch(err => console.log(err));

app.listen(3000, ()=>{
    console.log("Server Listening on PORT 3000");
});

