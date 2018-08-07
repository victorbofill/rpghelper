const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  entry: String
});

module.exports = mongoose.model('Entry', schema);