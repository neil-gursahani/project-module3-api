var express = require('express');
var router = express.Router();

router.get('/start', function(req, res, next) {
  // res.send("The test API is working correctly.")
  res.json({name: "Here is the beginning of Project 3!"});
});

module.exports = router;