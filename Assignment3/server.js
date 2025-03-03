const express = require('express');

const addUserRoutes = require('./routes/UserRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.use(addUserRoutes);

app.use((req,res) => {
    res.status(404 ).send(`<h1>404: Page not found</h1><a href="/">Go to Home</a>`);
})

app.listen(3000, ()=>{
    console.log("Server Listening on PORT 3000");
});

