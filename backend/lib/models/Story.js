const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  url: String,
  name: String,
  description: String,
  available: Boolean,
  complete: Boolean,
  reward: String,
  notes: Array,
  type: { type: String, enum: ['event', 'job'] },
  patron: {type: Schema.Types.ObjectId, ref: 'Story'},
  unlocks: [{type: Schema.Types.ObjectId, ref: 'Story'}]
});

module.exports = mongoose.model('Story', schema);