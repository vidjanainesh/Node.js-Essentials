const path = require("path");
const fs = require('fs');

const filePath = path.join(__dirname, '../users.json');

exports.homePageForm = (req,res,next) => {
    res.status(200).render(path.join(__dirname, '../views/homeViews.ejs'));
}

exports.addUser = (req,res,next) => {
    console.log(req.body);
    
    let arr = [];

    const data = fs.readFileSync(filePath);
    if(data){
        try {
            arr = JSON.parse(data);
        } catch (error) {
            arr = [];
        }
    }

    arr.push(req.body);
    fs.writeFileSync(filePath, JSON.stringify(arr, null, 2));
    res.redirect('/');

}