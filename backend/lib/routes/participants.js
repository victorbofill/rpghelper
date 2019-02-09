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
    const updatedParticipant = await Participant.findByIdAndUpdate(req.params.id, req.body, updateOptions)
      .catch(err => next(err));
    return res.json(updatedParticipant);
  })

  .delete('/:id', async(req, res, next) => {
    const deletedParticipant = await Participant.findByIdAndRemove(req.params.id)
      .catch(err => next(err));
    return res.json(deletedParticipant);
  });