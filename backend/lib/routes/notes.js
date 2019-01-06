const router = require('express').Router();
const Note = require('../models/Note');
const { updateOptions } = require('../utils/mongoose-helpers');

module.exports = router
  .get('/', (req, res, next) => {
    Note.find()
      .lean()
      .then(notes => res.json(notes))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    return Note.create(req.body)
      .then(() => {
        return Note.find()
          .lean()
          .then(notes => res.json(notes))
          .catch(next);
      })
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    return Note.findByIdAndUpdate(req.params.id, req.body, updateOptions)
      .then(() => {
        return Note.find()
          .lean()
          .then(notes => res.json(notes))
          .catch(next);
      })
      .catch(next);        
  })
  
  .delete('/:id', (req, res, next) => {
    return Note.findByIdAndRemove(req.params.id)
      .then(() => {
        return Note.find()
          .lean()
          .then(notes => res.json(notes))
          .catch(next);
      })
      .catch(next);
  });