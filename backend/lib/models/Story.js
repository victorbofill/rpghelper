const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  url: String,
  name: String,
  chapters: [{type: Schema.Types.ObjectId, ref: 'Chapter'}]
});
  
module.exports = mongoose.model('Story', schema);