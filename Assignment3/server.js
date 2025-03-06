const express = require('express');

const addUserRoutes = require('./routes/UserRoutes');

const app = express();

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware for serving static files (CSS)
app.use(express.static('public'));

// Routes
app.use(addUserRoutes);

// 404 Page
app.use((req,res) => {
    res.status(404 ).send(`<h1>404: Page not found</h1><a href="/">Go to Home</a>`);
})

// Server Listening
app.listen(3000, ()=>{
    console.log("Server Listening on PORT 3000");
});

