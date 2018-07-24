const router = require('express').Router();
const Note = require('../models/Note');
const { updateOptions } = require('../utils/mongoose-helpers');

module.exports = router
  .get('/', (req, res, next) => {
    Note.find()
      .lean()
      .then(location => res.json(location))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    Note.create(req.body)
      .then(location => res.json(location))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    return Note.findByIdAndUpdate(req.params.id, req.body, updateOptions)
      .then(updated => res.json(updated))
      .catch(next);        
  })
  
  .delete('/:id', (req, res, next) => {
    return Note.findByIdAndRemove(req.params.id)
      .then(() => res.json({ deleted: true }))
      .catch(next);
  });