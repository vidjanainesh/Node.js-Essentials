const express = require('express');

const app = express();

const path = require('path');

const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');
const viewRoutes = require('./routes/viewRoutes');
app.use(express.static(path.join(__dirname,'public')));

app.use(viewRoutes);
app.use(userRoutes);
app.use(homeRoutes);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'errorViews.html'))
});

app.listen(3000);