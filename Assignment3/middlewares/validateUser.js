const fs = require('fs');
const path = require('path');

// Middleware to validate user input before adding to the database
exports.validateUser = (req, res, next) => {
    let user = req.body;

    // Check if all required fields are present
    if (!user.id || !user.fname || !user.lname) {
        return res.send(`
            <script>
                alert("Please fill each field!");
                window.location.href = "/";
            </script>    
        `);
    }

    // Validate ID (must be a number) and names (must contain only letters)
    if (!( !isNaN(Number(user.id)) && /^[A-Za-z]+$/.test(user.fname) && /^[A-Za-z]+$/.test(user.lname))) {
        return res.send(`
            <script>
                alert("Enter a valid name and ID!");
                window.location.href = "/";
            </script>    
        `);
    }
    
    let arr = [];
    const filePath = path.join(__dirname, '../data/users.json');
    
    // Read existing users from JSON file
    const data = fs.readFileSync(filePath);
    if (data) {
        try {
            arr = JSON.parse(data);
        } catch (err) {
            arr = [];
        } 
    }
        
    // Check if the user ID already exists
    if (arr.some((curr) => curr.id == req.body.id)) {
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