var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signupRoute = require('./routes/signup');

var app = express();
app.use(cors({origin: true, credentials: true}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose
  .connect(process.env.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to db:', process.env.db);
  })
  .catch(error => {
    console.log('Not connected to db, error:', error);
  });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signup', signupRoute);

module.exports = app;
