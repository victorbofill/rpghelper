const router = require('express').Router();
const Participants = require('../models/Participants');
const Participant = require('../models/Participant');
const { updateOptions } = require('../utils/mongoose-helpers');

module.exports = router
  .get('/', (req, res, next) => {
    Participants.find()
      .populate('participants')
      .lean()
      .then(participants => res.json(participants))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    Participants.create(req.body)
      .then(participants => res.json(participants))
      .catch(next);
  })

  .post('/:id', (req, res, next) => {
    Participant.create(req.body)
      .then(participant => {
        return Participants.findByIdAndUpdate(req.params.id, {
          $addToSet: { participants: participant._id }
        }, updateOptions);
      })
      .then(participants => res.json(participants))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    return Participant.findByIdAndUpdate(req.params.id, req.body, updateOptions)
      .then(updated => res.json(updated))
      .catch(next);        
  })
  
  .delete('/', (req, res, next) => {
    return Participants.findOneAndRemove()
      .then(() => res.json({ deleted: true }))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    return Participant.findByIdAndRemove(req.params.id)
      .then(() => res.json({ deleted: true }))
      .catch(next);
  });