const router = require('express').Router();
const Participants = require('../models/Participants');
const { updateOptions } = require('../utils/mongoose-helpers');

module.exports = router
  .get('/', (req, res, next) => {
    Participants.find()
      .lean()
      .then(location => res.json(location))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    Participants.create(req.body)
      .then(location => res.json(location))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    return Participants.findByIdAndUpdate(req.params.id, req.body, updateOptions)
      .then(updated => res.json(updated))
      .catch(next);        
  })
  
  .delete('/:id', (req, res, next) => {
    return Participants.findByIdAndRemove(req.params.id)
      .then(() => res.json({ deleted: true }))
      .catch(next);
  });