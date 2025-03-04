const path = require("path");
const fs = require('fs');

const usersfilePath = path.join(__dirname, '../data/users.json');

// Function to read and parse user data from JSON file
getUser = () => {
    let array = [];
    const data = fs.readFileSync(usersfilePath);

    if (data) {
        try {
            array = JSON.parse(data);
        } catch (error) {
            array = [];
        }
    }
    return array;
}

// Render the home page
exports.homePageForm = (req, res, next) => {
    res.status(200).render('homeViews');
}

// Add a new user to the JSON file
exports.addUser = (req, res, next) => {
    let arr = getUser();
    arr.push(req.body);
    arr.sort((a, b) => Number(a.id) - Number(b.id)); // Sort users by ID
    fs.writeFileSync(usersfilePath, JSON.stringify(arr, null, 2));
    res.redirect('/');
}

// Display all users
exports.displayUser = (req, res, next) => {
    let arr = getUser();
    if (arr.length === 0) 
        return res.send(`<script>alert("No Users Found"); window.location.href = '/';</script>`);
    
    res.render('usersViews', { arr: arr });
}

// Render the edit user form
exports.editUserForm = (req, res, next) => {
    let arr = getUser();
    if (arr.length === 0) 
        return res.send(`<script>alert("No Users Found"); window.location.href = '/';</script>`);
    
    const user = arr.find((curr) => curr.id == req.params.id);
    if (!user) {
        return res.send(`<script>alert("No Such Users Found"); window.location.href = '/';</script>`);
    }

    res.render('editUserViews', { user: user });
}

// Edit and update user details
exports.editUser = (req, res, next) => {
    let arr = getUser();
    if (arr.length === 0) 
        return res.send(`<script>alert("No Users Found"); window.location.href = '/';</script>`);

    arr.forEach((curr) => {
        if (curr.id === req.body.id) {
            curr.fname = req.body.fname;
            curr.lname = req.body.lname;
        }
    });

    fs.writeFileSync(usersfilePath, JSON.stringify(arr, null, 2));
    res.redirect('/');
}

// Delete a user from the JSON file
exports.deleteUser = (req, res, next) => {
    let arr = getUser();
    if (arr.length === 0) 
        return res.send(`<script>alert("No Users Found"); window.location.href = '/';</script>`);
    
    let index = arr.findIndex((curr) => curr.id == req.body.deleteId);
    console.log(index);
    arr.splice(index, 1);
    fs.writeFileSync(usersfilePath, JSON.stringify(arr, null, 2));

    return res.send(`<script>alert("User Deleted"); window.location.href = '/';</script>`);
}
