const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, '../data/users.json');

// To get a form for creating a new user
exports.userInputForm = (req,res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'createUserViews.html'));
}

// To input the new user into users.json
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
    fs.writeFileSync(filePath, JSON.stringify(arr,null,2), 'utf8');
    res.redirect('/');
}

//To view the users
exports.viewUsers = (req,res) => {
    fs.readFile(filePath, (err,data) => {
        if(!data.toString()) res.redirect("/create");
        else{
            let arr = JSON.parse(data);
            arr = arr.map((curr) => `<li>${curr.fname} ${curr.sname}</l1>`);

            let users= '';
            for(let i=0; i<arr.length; i++){
                users += arr[i];
            }
            res.send(`
                <link rel="stylesheet" href="/styles.css">
                <h1>List of Users: </h1>
                <ul>
                    ${users}
                </ul>
            `);
        }               
    });
}