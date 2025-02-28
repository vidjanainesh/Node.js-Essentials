const fs = require('fs');
const path = require('path');

exports.validateUser = (req,res,next) => {
    let user = req.body;
        if(!user.fname || !user.sname){
            return res.send(`
                <script>
                    alert("Please enter the Fullname!");
                    window.location.href = "/";
                </script>    
            `);
        } 

        if(!(/^[A-Za-z]+$/.test(user.fname) && /^[A-Za-z]+$/.test(user.sname))) {
            return res.send(`
                <script>
                    alert("Enter a valid name!");
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
            
        if(arr.some((curr) => curr.fname == req.body.fname && curr.sname === req.body.sname)) {
            return res.send(`
                <html>
                    <script>
                        alert("User already exists!");
                        window.location.href = "/";
                    </script>
                </html>
            
            `);
        }
        next();
}