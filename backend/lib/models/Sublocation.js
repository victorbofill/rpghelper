const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  url: String,
  name: String,
  description: String,
});

module.exports = mongoose.model('Sublocation', schema);