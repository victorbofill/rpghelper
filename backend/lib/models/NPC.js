const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  name: String,
  disposition: String,
  stats: {
    dr: String,
    money: String,
    skills: Array,
    attributes: {
      str: Number,
      agi: Number,
      end: Number,
      will: Number,
      cha: Number,
      rea: Number,
      per: Number
    }
  },
  notes: Array
});

module.exports = mongoose.model('NPC', schema);