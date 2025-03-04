const User = require('../models/user');

// Home Page (to render the home page)
exports.homePage = (req,res,next) => {
    res.status(200).render('homeViews');
}

// Add User Form (to get the add user form)
exports.addUserForm = (req,res,next) => {
    res.render('createUserViews');
}

// Adds User to the database
exports.addUser = (req,res,next) => {

    User.create({
        // id: req.body.id,
        fname: req.body.fname,
        lname: req.body.lname,
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

    res.redirect('/');
}

// Displays the users (in ascending order)
exports.displayUser = (req,res,next) => {
    
    User.findAll({
        order: [['userid', 'ASC']]
    })
    .then((data) => res.render('usersViews', {arr : data}))
    .catch((err) => console.log(err));
}

// Edit User Form (to get the edit user form)
exports.editUserForm = (req,res,next) => {

    User.findOne({ where: {userid: req.params.id} })
        .then(data => {
            
            if(!data){
                return res.send(`<script>alert("No Users Found"); window.location.href = '/';</script>`);
            } 
            else{
                res.render('editUserViews', {user : data});
            }
        })
        .catch(err => console.log(err));
}

// Edits the user with the given id
exports.editUser = (req,res,next) => {

    User.update(
        {
            fname: req.body.fname,
            lname: req.body.lname
        },
        { where: {
            userid: req.body.id
        }}
    )
    .then(() => console.log("User Updated"))
    .catch(err => console.log(err))

    res.redirect('/');
}

// Deletes a given user
exports.deleteUser = (req,res,next) => {

    console.log(req.params.id);
    User.destroy({
        where: { userid: Number(req.params.id) }
    })
    .then(data => {            
        if(!data){
            return res.send(`<script>alert("No Users Found"); window.location.href = '/';</script>`);
        } 
        else {
            res.send(`<script>alert("User Deleted"); window.location.href = '/';</script>`)
        }
    })
    .catch((err) => console.log(err));
}