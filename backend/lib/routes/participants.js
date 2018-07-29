const router = require('express').Router();
const ParticipantList = require('../models/ParticipantList');
const Participant = require('../models/Participant');
const { updateOptions } = require('../utils/mongoose-helpers');

module.exports = router
  .post('/', (req, res, next) => {
    ParticipantList.create({})
      .then((body) => res.json({ id: body._id, participants: [] }))
      .catch(next);
  })

  .post('/:id', (req, res, next) => {
    Participant.create({})
      .then(participant => {
        return ParticipantList.findByIdAndUpdate(req.params.id, {
          $addToSet: { participants: participant._id }
        }, updateOptions);
      })
      .then(() => {
        ParticipantList.find()
          .populate('participants')
          .lean()
          .then((body) => res.json({ id: body[0]._id, participants: body[0].participants }))
          .catch(next);   
      })
      .catch(next);
  })

  .get('/', (req, res, next) => {
    ParticipantList.findOne()
      .populate('participants')
      .lean()
      .then((body) => res.json({ id: body._id, participants: body.participants }))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    return Participant.findByIdAndUpdate(req.body.id, req.body, updateOptions)
      .then(() => {
        ParticipantList.findById(req.params.id)
          .populate('participants')
          .lean()
          .then((body) => res.json({ id: body._id, participants: body.participants }))
          .catch(next);   
      })
      .catch(next);        
  })

  .delete('/:id', (req, res, next) => {
    return Participant.findByIdAndRemove(req.body.id)
      .then(() => {
        ParticipantList.findById(req.params.id)
          .populate('participants')
          .lean()
          .then((body) => res.json({ id: body._id, participants: body.participants }))
          .catch(next);   
      })
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    return ParticipantList.findOneAndRemove(req.params.id)
      .then(() => res.json({}))
      .catch(next);
  });