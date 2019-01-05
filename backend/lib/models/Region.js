const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  url: String,
  name: String,
  cities: [{type: Schema.Types.ObjectId, ref: 'City'}]
});

module.exports = mongoose.model('Region', schema);