const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  regionId: String,
  url: String,
  name: String,
  cities: [{type: Schema.Types.ObjectId, ref: 'Location'}]
});

module.exports = mongoose.model('City', schema);