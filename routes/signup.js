const express = require('express');
const User = require("../models/Users");
const bcrypt = require("bcrypt");
const router = express.Router();
const bcryptSalt = 10;

router.post('/', (request, response, next) => {
  const { username, firstname, lastname, email, password, dateOfBirth } = request.body;
    
  User
    .findOne({ "email": email })
    .then(user => {
        if (user !== null) {
            response.json(user, {
              errorMessage: "This email is already being used! Please use another."
            });
        return;
    }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      User
      .create({
          username,
          firstname,
          lastname,
          email,
          password: hashPass,
          dateOfBirth
        })
      .then((user) => {
          response.json(user);
        })
      .catch(error => {
          response.json(error);
        });
      })

      .catch(error => {
        response.json(error);
      });
    })

module.exports = router;