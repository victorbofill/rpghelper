const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  url: String,
  name: String,
  relationship: String,
  money: Number,
  str: Number,
  agi: Number,
  end: Number,
  will: Number,
  cha: Number,
  rea: Number,
  per: Number,
  notes: Array,
  skills: Array
});

module.exports = mongoose.model('NPC', schema);