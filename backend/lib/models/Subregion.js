const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  regionId: String,
  url: { type: String, default: 'newsubregion'},
  name: { type: String, default: 'New Subregion'},
  description: { type: String, default: '' },
  locations: [{type: Schema.Types.ObjectId, ref: 'Locations'}]
});

module.exports = mongoose.model('Subregion', schema);