const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  baseId: String,
  url: { type: String, default: 'newasset' },
  name: { type: String, default: 'New Asset' },
  description: { type: String, default: '' }
});

module.exports = mongoose.model('Asset', schema);