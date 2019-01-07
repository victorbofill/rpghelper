const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  url: { type: String, default: 'newregion' },
  name: { type: String, default: 'newregion' },
  cities: [{type: Schema.Types.ObjectId, ref: 'City'}]
});

module.exports = mongoose.model('Region', schema);