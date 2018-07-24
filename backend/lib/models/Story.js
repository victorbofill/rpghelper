const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  name: String,
  description: String,
  available: Boolean,
  complete: Boolean,
  patron: String,
  reward: String,
  notes: Array,
  type: { type: String, enum: ['event', 'job']},
  unlocks: [{type: Schema.Types.ObjectId, ref: 'Story'}]
});

module.exports = mongoose.model('Story', schema);