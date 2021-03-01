//models/Business.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var businessSchema = new Schema({
  transaction: String,
  amount: Number,
  month: String,
  year: Number,
  artist: String
});

module.exports = mongoose.model('Business', businessSchema);
