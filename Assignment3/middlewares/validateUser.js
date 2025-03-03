const fs = require('fs');
const path = require('path');

exports.validateUser = (req,res,next) => {
    let user = req.body;
        if(!user.id || !user.fname || !user.lname){
            return res.send(`
                <script>
                    alert("Please fill each fields!");
                    window.location.href = "/";
                </script>    
            `);
        } 

        if(! ( !isNaN(Number(user.id)) && /^[A-Za-z]+$/.test(user.fname) && /^[A-Za-z]+$/.test(user.lname))) {
            return res.send(`
                <script>
                    alert("Enter a valid name and ID!");
                    window.location.href = "/";
                </script>    
            `);
        }
        
        let arr = [];
        const filePath = path.join(__dirname, '../data/users.json');
        
        const data = fs.readFileSync(filePath);
        if(data){
            try {
                arr = JSON.parse(data);
            } catch (err) {
                arr = [];
            } 
        }
            
        if(arr.some((curr) => curr.id == req.body.id)) {
            return res.send(`
                <html>
                    <script>
                        alert("User with given ID already exists!");
                        window.location.href = "/";
                    </script>
                </html>
            
            `);
        }
        next();
}