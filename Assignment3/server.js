const express = require('express');

const homeRoutes = require('./routes/homeRoutes');
const addUserRoutes = require('./routes/addUserRoutes');

const app = express();

app.use(addUserRoutes);
app.use(homeRoutes);


app.listen(3000, ()=>{
    console.log("Server Listening on PORT 3000");
});