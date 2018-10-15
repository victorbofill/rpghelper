const router = require('express').Router();
const Participant = require('../models/Participant');
const { updateOptions } = require('../utils/mongoose-helpers');

module.exports = router
  .get('/', (req, res, next) => {
    Participant.find()
      .lean()
      .then(body => res.send(body))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    Participant.create({})
      .then(body => res.json(body))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    return Participant.findByIdAndUpdate(req.params.id, req.body, updateOptions)
      .catch(next);        
  })

  .delete('/:id', (req, res, next) => {
    return Participant.findByIdAndRemove(req.params.id)
      .then(() => res.json({}))
      .catch(next);
  });