const express = require('express');

const app = express();

const path = require('path');

const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');
const viewRoutes = require('./routes/viewRoutes');

// Middleware for serving static files (CSS)
app.use(express.static(path.join(__dirname,'public')));

// Routes
app.use(viewRoutes);
app.use(userRoutes);
app.use(homeRoutes);

// 404 Page
app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'errorViews.html'))
});

// Server Listening
app.listen(3000);