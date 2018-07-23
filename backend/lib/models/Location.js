const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  name: String,
  description: String,
  finances: {
    assets: Number,
    income: Number,
    overhead: Number,
    profit: Number
  },
  sublocations: [{
    name: String,
    description: String,
    active: Boolean
  }],
  npcs: [{type: Schema.Types.ObjectId, ref: 'NPC'}],
  stories: [{type: Schema.Types.ObjectId, ref: 'Story'}],
});

module.exports = mongoose.model('Location', schema);