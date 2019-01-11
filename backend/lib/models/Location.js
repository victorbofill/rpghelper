const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  subregionId: String,
  url: { type: String, default: 'newlocation' },
  name: { type: String, default: 'New Location' },
  description: { type: String, default: '' },
  bases: [{type: Schema.Types.ObjectId, ref: 'Base'}]
});

module.exports = mongoose.model('Location', schema);