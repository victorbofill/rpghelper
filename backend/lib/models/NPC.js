const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  locationId: String,
  url: String,
  name: String,
  relationship: String,
  money: String,
  str: String,
  agi: String,
  end: String,
  will: String,
  cha: String,
  rea: String,
  per: String,
  notes: Array,
  skills: Array
});

module.exports = mongoose.model('NPC', schema);