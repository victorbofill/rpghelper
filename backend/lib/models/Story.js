const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  url: { type: String, default: 'newstory' },
  name: { type: String, default: 'New Story' },
  description: { type: String, default: '' },
  reward: { type: String, default: '' },
  chapters: [{type: Schema.Types.ObjectId, ref: 'Chapter'}],
});
  
module.exports = mongoose.model('Story', schema);