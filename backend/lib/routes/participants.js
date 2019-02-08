const router = require('express').Router();
const Participant = require('../models/Participant');
const { updateOptions } = require('../utils/mongoose-helpers');

module.exports = router
  .post('/', async(req, res, next) => {
    const newParticipant = await Participant.create(req.body)
      .catch(err => next(err));
    return res.json(newParticipant);
  })

  .get('/', async(req, res, next) => {
    const participants = await Participant.find()
      .catch(err => next(err));
    return res.json(participants);
  })

  .put('/:id', async(req, res, next) => {
    const {
      name, str, agi, end, will, cha, rea, per,
      apAdjust, ap, dr, hp, guard, disposition, subtlety, insight, awareness,
      bleeding, blinded, burning, crippled, deafened, afraid, prone, dead, immobilized, unconscious
    } = req.body;

    const updates = {
      name, str, agi, end, will, cha, rea, per,
      apAdjust, ap, dr, hp, guard, disposition, subtlety, insight, awareness,
      bleeding, blinded, burning, crippled, deafened, afraid, prone, dead, immobilized, unconscious
    };

    const updatedParticipant = await Participant.findByIdAndUpdate(req.params.id, updates, updateOptions)
      .catch(err => next(err));
    return res.json(updatedParticipant);
  })

  .delete('/:id', async(req, res, next) => {
    const deletedParticipant = await Participant.findByIdAndRemove(req.params.id)
      .catch(err => next(err));
    return res.json(deletedParticipant);
  });