const express = require('express');
const Portfolio = require("../models/Portfolio");
const router = express.Router();

router.post('/', (request, response, next) => {
  const { name, description } = request.body;
    
    Portfolio
      .create({
          name,
          description
        })
      .then((stock) => {
          response.json(stock);
        })
      .catch(error => {
          response.json(error);
        });
      });

module.exports = router;