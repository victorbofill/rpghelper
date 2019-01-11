const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  locationId: String,
  url: { type: String, default: 'newbase' },
  name: { type: String, default: 'New Base' },
  description: { type: String, default: '' },
  income: { type: String, default: '0' },
  overhead: { type: String, default: '0' },
  profit: { type: String, default: '0' },
  assets: [{type: Schema.Types.ObjectId, ref: 'Asset'}],
  NPCs: [{type: Schema.Types.ObjectId, ref: 'NPC'}]
});

module.exports = mongoose.model('Base', schema);