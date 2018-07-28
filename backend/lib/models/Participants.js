const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema([{
  dr: { type: Number, default: 0 },
  apAdjust: { type: Number, default: -1 },
  str: { type: Number, default: 1 },
  agi: { type: Number, default: 1 },
  end: { type: Number, default: 1 },
  will: { type: Number, default: 1 },
  cha: { type: Number, default: 1 },
  rea: { type: Number, default: 1 },
  per: { type: Number, default: 1 },
  name: { type: String, default: '' },
  hp: { type: Number, default: 0 },
  ap: { type: Number, default: 0 },
  insight: { type: Number, default: 0 },
  guard: { type: Number, default: 0 },
  disposition: { type: String, default: 'neutral', enum: ['nemesis', 'enemy', 'socially hostile', 'distrustful', 'neutral', 'friendly', 'friend', 'loyal'] },
  subtlety: { type: Number, default: 0 },
  awareness: { type: String, default: 'resting', enum: ['oblivious', 'resting', 'cautious', 'engaged'] },
  bleeding: { type: Number, default: 0 },
  blinded: { type: String, enum: ['none', 'minor', 'catastrophic']},
  burning: { type: Number, default: 0 },
  crippled: { type: String, enum: ['none', 'minor', 'catastrophic']},
  deafened: { type: String, enum: ['none', 'minor', 'catastrophic']},
  afraid: { type: Boolean, default: false },
  immobilized: { type: Boolean, default: false },
  prone: { type: Boolean, default: false },
  unconscious: { type: Boolean, default: false },
  dead: { type: Boolean, default: false }
}]);

module.exports = mongoose.model('Note', schema);