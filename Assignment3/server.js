const express = require('express');

const homeRoutes = require('./routes/homeRoutes');
const addUserRoutes = require('./routes/addUserRoutes');
const displayUserRoutes = require('./routes/displayUserRoutes');
const editUserRoutes = require('./routes/editUserRoutes');
const deleteUserRoutes = require('./routes/deleteUserRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(addUserRoutes);
app.use(displayUserRoutes);
app.use(editUserRoutes);
app.use(deleteUserRoutes);
app.use(homeRoutes);


app.listen(3000, ()=>{
    console.log("Server Listening on PORT 3000");
});