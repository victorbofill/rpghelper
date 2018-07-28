const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  participants: [{ type: Schema.Types.ObjectId, ref: 'Participant' }]
});

module.exports = mongoose.model('ParticipantList', schema);