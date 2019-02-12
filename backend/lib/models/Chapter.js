const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  url: { type: String, default: 'newchapter' },
  name: { type: String, default: 'New Chapter' },
  description: { type: String, default: '' },
  status: { type: String, enum: ['Available', 'Unavailable', 'Complete'], default: 'Unavailable' },
  reward: { type: String, default: '' },
  unlocks: {type: Schema.Types.ObjectId, ref: 'Story'},
  patron: {type: Schema.Types.ObjectId, ref: 'NPC'},
});

module.exports = mongoose.model('Chapter', schema);