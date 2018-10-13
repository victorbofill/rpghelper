const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  url: String,
  name: String,
  description: String,
  reward: String,
  status: { type: String, enum: ['available', 'unavailable', 'complete'] },
  patron: {type: Schema.Types.ObjectId, ref: 'NPC'},
  unlocks: [{type: Schema.Types.ObjectId, ref: 'Chapter'}]
});

module.exports = mongoose.model('Chapter', schema);