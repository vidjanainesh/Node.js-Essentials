const express = require('express');

// const users = require('../users.json');

const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, '../data/users.json');

const router = express.Router();

//Create User
exports.userInputForm = (req,res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'createUserViews.html'));
    // console.log("Inside create user");
}

//Input User into users.json
exports.createUser = (req,res) => {
    
    let arr = [];
    const data = fs.readFileSync(filePath);
    if(data){
        try {
            arr = JSON.parse(data);
        } catch (err) {
            arr = [];
        } 
    }
    
    arr.push(req.body);
    // JSON.stringify(value, replacer, space)
    fs.writeFileSync(filePath, JSON.stringify(arr,null,2), 'utf8');
    res.redirect('/');
}

//View users
exports.viewUsers = (req,res) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'viewUserViews.html'));
    fs.readFile(filePath, (err,data) => {
        if(!data.toString()) res.redirect("/create");
        else{
            let arr = JSON.parse(data);
            arr = arr.map((curr) => `<li>${curr.fname} ${curr.sname}</l1>`);

            res.send(`
                <link rel="stylesheet" href="/styles.css">
                <h1>List of Users: </h1>
                <ul>
                    ${[...arr]}
                </ul>
            `);
        }
        
                
    });
}