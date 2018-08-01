const router = require('express').Router();
const Note = require('../models/Note');
const { updateOptions } = require('../utils/mongoose-helpers');

module.exports = router
  .get('/', (req, res, next) => {
    Note.find()
      .lean()
      .then(note => res.json(note))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    Note.create(req.body)
      .then(note => res.json(note))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    return Note.findByIdAndUpdate(req.params.id, req.body, updateOptions)
      .then(updated => res.json(updated))
      .catch(next);        
  })
  
  .delete('/:id', (req, res, next) => {
    return Note.findByIdAndRemove(req.params.id)
      .then((body) => res.json(body._id))
      .catch(next);
  });