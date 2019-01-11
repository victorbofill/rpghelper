const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  baseId: String,
  url: { type: String, default: 'newnpc' },
  name: { type: String, default: 'New NPC' },
  description: { type: String, default: '' },
  relationship: { type: String, default: 'Neutral' },
  money: { type: String, default: '0' },
  str: { type: String, default: '1' },
  agi: { type: String, default: '1' },
  end: { type: String, default: '1' },
  will: { type: String, default: '1' },
  cha: { type: String, default: '1' },
  rea: { type: String, default: '1' },
  per: { type: String, default: '1' },
  notes: { type: String, default: '' },
  skills: { type: String, default: '' }
});

module.exports = mongoose.model('NPC', schema);