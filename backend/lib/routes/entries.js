const router = require('express').Router();
const Entry = require('../models/Entry');
const { updateOptions } = require('../utils/mongoose-helpers');

module.exports = router
  .get('/', (req, res, next) => {
    Entry.find()
      .lean()
      .then(location => res.json(location))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    Entry.create(req.body)
      .then(location => res.json(location))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    return Entry.findByIdAndUpdate(req.params.id, req.body, updateOptions)
      .then(updated => res.json(updated))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    return Entry.findByIdAndRemove(req.params.id)
      .then(() => res.json({ deleted: true }))
      .catch(next);
  });