const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  url: String,
  name: String,
  description: String,
  assets: Number,
  income: Number,
  overhead: Number,
  profit: Number,
  sublocations: [{type: Schema.Types.ObjectId, ref: 'Sublocation'}],
  npcs: [{type: Schema.Types.ObjectId, ref: 'NPC'}],
});

module.exports = mongoose.model('Location', schema);