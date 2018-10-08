const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  url: String,
  name: String,
  disposition: String,
  stats: {
    dr: Number,
    money: Number,
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