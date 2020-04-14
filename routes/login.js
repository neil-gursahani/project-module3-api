const express = require('express');
const app = express();
const User = require("../models/Users");

app.post('/', (request, response, next) => {
  const theEmail = request.body.email;
  const thePassword = request.body.password;

  if (theEmail === '' || thePassword === '') {
    response.json(user, {
      errorMessage: 'Please fill in both your email and password to successfully log in.'
    });
    return;
  }

//Authentication for the user login
  User
  .findOne(theEmail)
  .then(user => {
      if (!user) {
        response.json(user, {
          errorMessage: 'Your credentials do not exist. Please create an account!'
        });
      }
      else if (user.password !== thePassword) {
        response.json(user, {
            errorMessage: 'Invalid credentials. Please try again!'
          });
      } else {
          
        response.json(user);
      }
  })
  .catch(error => {
    next(error);
  });
});

module.exports = app;
