const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  date: { type: Date, default: Date.now() },
  entry: String
});

module.exports = mongoose.model('Entry', schema);