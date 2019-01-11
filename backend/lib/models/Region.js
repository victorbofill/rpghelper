const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  url: { type: String, default: 'newregion' },
  name: { type: String, default: 'New Region' },
  description: { type: String, default: '' },
  subregions: [{type: Schema.Types.ObjectId, ref: 'Subregion'}]
});

module.exports = mongoose.model('Region', schema);