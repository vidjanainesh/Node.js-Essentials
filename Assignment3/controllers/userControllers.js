const path = require("path");
const fs = require('fs');

const usersfilePath = path.join(__dirname, '../data/users.json');

exports.homePageForm = (req,res,next) => {
    res.status(200).render('homeViews');
}

exports.addUser = (req,res,next) => {
    
    let arr = [];
    const data = fs.readFileSync(usersfilePath);
    if(data){
        try {
            arr = JSON.parse(data);
        } catch (error) {
            arr = [];
        }
    }

    arr.push(req.body);
    arr.sort((a, b) => Number(a.id) - Number(b.id));
    fs.writeFileSync(usersfilePath, JSON.stringify(arr, null, 2));
    res.redirect('/');

}

exports.displayUser = (req,res,next) => {
    
    let array = [];
    const data = fs.readFileSync(usersfilePath);

    if(data){
        try {
            array = JSON.parse(data);
        } catch (error) {
            array = [];
            return res.send(`<script>alert("No Users Found"); window.location.href = '/';</script>`);
        }
    }
    
    array = array.map((curr) => `${curr.id} ${curr.fname} ${curr.lname}`);
    res.render('usersViews', {arr : array});

}

exports.editUserForm = (req,res,next) => {
    
    let array = [];
    const data = fs.readFileSync(usersfilePath);

    if(data){
        try {
            array = JSON.parse(data);
        } catch (error) {
            array = [];
            return res.send(`<script>alert("No Users Found"); window.location.href = '/';</script>`);
        }
    }

    const user = array.find((curr) => curr.id === req.body.editId);
    if(!user){
        return res.send(`<script>alert("No Such Users Found"); window.location.href = '/';</script>`);
    }
    // console.log(user);
    res.render('editUserViews', {user : user});
}

exports.editUser = (req,res,next) => {
    let array = [];
    const data = fs.readFileSync(usersfilePath);
    array = JSON.parse(data);

    array.forEach((curr) => {
        if(curr.id === req.body.id){
            curr.fname = req.body.fname;
            curr.lname = req.body.lname;
        }
    });

    fs.writeFileSync(usersfilePath, JSON.stringify(array, null, 2));
    res.redirect('/');
}

exports.deleteUser = (req,res,next) => {
    let array = [];
    const data = fs.readFileSync(usersfilePath);

    if(data){
        try {
            array = JSON.parse(data);
        } catch (error) {
            array = [];
            return res.send(`<script>alert("No Users Found"); window.location.href = '/';</script>`);
        }
    }

    console.log(req.body.deleteId);
    
    let index = array.findIndex((curr) => curr.id == req.body.deleteId);
    console.log(index);
    array.splice(index,1);
    fs.writeFileSync(usersfilePath, JSON.stringify(array, null, 2));

    return res.send(`<script>alert("User Deleted"); window.location.href = '/';</script>`);
}