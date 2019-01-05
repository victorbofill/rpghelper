const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  locationId: String,
  url: String,
  name: String,
  description: String,
});

module.exports = mongoose.model('Sublocation', schema);