const express = require('express');
const sequelize = require('./util/database');

const addUserRoutes = require('./routes/userRoutes');
const { render } = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.use(addUserRoutes);

app.use((req,res) => {
    res.status(404).render('404errorViews');
})

sequelize.sync({force: false})
    .then(() => console.log('Database Connected'))
    .catch(err => console.log(err));

app.listen(3000, ()=>{
    console.log("Server Listening on PORT 3000");
});

