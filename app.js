const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const indexRoutes = require('./routes/index');
const aboutRoutes = require('./routes/about');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes
app.use('/', indexRoutes);
app.use('/about', aboutRoutes);

module.exports = app;
