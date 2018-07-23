const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  note: String
});

module.exports = mongoose.model('Note', schema);