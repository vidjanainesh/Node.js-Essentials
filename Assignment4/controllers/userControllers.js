const User = require('../models/user');

// Home Page (to render the home page)
exports.homePageForm = (req,res,next) => {
    res.status(200).render('homeViews');
}

// User Form
exports.addUserForm = (req,res,next) => {
    res.render('createUserViews');
}
 
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

exports.displayUser = (req,res,next) => {
    
    User.findAll({
        order: [['id', 'ASC']]
    })
        .then((data) => res.render('usersViews', {arr : data}))
        .catch((err) => console.log(err));

}

exports.editUserForm = (req,res,next) => {
    
    User.findOne({ where: {id: req.params.id} })
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

exports.editUser = (req,res,next) => {

    User.update(
        {
            fname: req.body.fname,
            lname: req.body.lname
        },
        { where: {
            id: req.body.id
        }}
    )
    .then(() => console.log("User Updated"))
    .catch(err => console.log(err))

    res.redirect('/');
}

exports.deleteUser = (req,res,next) => {

    User.destroy({where: {
        id: req.body.deleteId
    }})
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