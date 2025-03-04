const User = require('../models/user');

exports.validateUser = (req,res,next) => {
    let user = req.body;
        
    // Checks if the input fields are empty
    if(!user.fname || !user.lname){
        return res.send(`
            <script>
                alert("Please fill each fields!");
                window.location.href = "/";
            </script>    
        `);
    } 

    // Checks if the name contains only alphabets
    if(! (/^[A-Za-z]+$/.test(user.fname) && /^[A-Za-z]+$/.test(user.lname))) {
        return res.send(`
            <script>
                alert("Enter a valid name and ID!");
                window.location.href = "/";
            </script>    
        `);
    }

    // User.findOne({ where: {id: req.body.id}})
    //     .then(() => {
    //         return res.send(`
    //             <html>
    //                 <script>
    //                     alert("User with given ID already exists!");
    //                     window.location.href = "/";
    //                 </script>
    //             </html>       
    //         `);
    //     })
    //     .catch((err) => console.log(err));
    
    next();
}