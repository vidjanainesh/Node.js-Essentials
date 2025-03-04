const User = require('../models/user');
const Order = require('../models/order');

// Add Order Form (to get the add order form)
exports.addOrderForm = (req,res,next) => {
    res.render('createOrderViews');
}

// Adds Orders to the database
exports.addOrder = (req,res,next) => {

    User.findByPk(req.body.userid)
        .then((user) => {
            if(!user) return res.send(`<script>alert("No Users Found"); window.location.href = '/';</script>`);
            
            else{
                user.createOrder({
                    total_amount: req.body.total_amount
                })
                .then(() => res.redirect('/'))
            }
        })
        .catch((err) => console.log(err));    
}

// Displays the orders (in ascending order)
exports.displayOrder = (req,res,next) => {
    
    Order.findAll({
        order: [['orderid', 'ASC']]
        })
        .then((data) => res.render('ordersViews', {arr : data}))
        .catch((err) => console.log(`ERROR: ${err}`));
}