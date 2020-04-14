const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stockPortfolioSchema = new Schema({
    name: String,
    description: String
  });

const stockPortfolioModel = mongoose.model("Portfolio", stockPortfolioSchema);

module.exports = stockPortfolioModel;