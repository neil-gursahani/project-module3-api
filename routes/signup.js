const express = require('express');
const router = express.Router();
const User = require("../models/Users");

router.post('/', (request, response, next) => {
    const { username, firstname, lastname, email, password, dateOfBirth } = request.body;

    User.create({
        username,
        firstname,
        lastname,
        email,
        password,
        dateOfBirth
      })
    .then((user) => {
        response.json(user)
      })
      .catch(error => {
        response.json(error)
      });

});

module.exports = router;

