const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stockPortfolioSchema = new Schema({
    user: {type: ObjectId, ref: 'User'},
    name: String,
    description: String,
    stocks: [String]
  });

const stockPortfolioModel = mongoose.model("Portfolio", stockPortfolioSchema);

module.exports = stockPortfolioModel;