const router = require('express').Router();
const ParticipantList = require('../models/ParticipantList');
const Participant = require('../models/Participant');
const { updateOptions } = require('../utils/mongoose-helpers');

module.exports = router
  .get('/', (req, res, next) => {
    ParticipantList.find()
      .populate('participants')
      .lean()
      .then(participants => res.json(participants))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    ParticipantList.create(req.body)
      .then(participants => res.json(participants))
      .catch(next);
  })

  .post('/:id', (req, res, next) => {
    Participant.create(req.body)
      .then(participant => {
        return ParticipantList.findByIdAndUpdate(req.params.id, {
          $addToSet: { participants: participant._id }
        }, updateOptions);
      })
      .then(() => {
        ParticipantList.find()
          .populate('participants')
          .lean()
          .then(participants => res.json(participants))
          .catch(next);   
      })
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    return Participant.findByIdAndUpdate(req.params.id, req.body, updateOptions)
      .then(() => {
        ParticipantList.find()
          .populate('participants')
          .lean()
          .then(participants => res.json(participants))
          .catch(next);   
      })
      .catch(next);        
  })
  
  .delete('/', (req, res, next) => {
    return ParticipantList.findOneAndRemove()
      .then(() => res.json({ deleted: true }))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    return Participant.findByIdAndRemove(req.params.id)
      .then(() => res.json({ deleted: true }))
      .catch(next);
  });