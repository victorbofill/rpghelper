const router = require('express').Router();
const Entry = require('../models/Entry');
const { updateOptions } = require('../utils/mongoose-helpers');

module.exports = router
  .get('/', (req, res, next) => {
    Entry.find()
      .lean()
      .then(entries => res.json(entries))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    return Entry.create(req.body)
      .then(() => {
        return Entry.find()
          .lean()
          .then(entries => res.json(entries))
          .catch(next);
      })
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    return Entry.findByIdAndUpdate(req.params.id, req.body, updateOptions)
      .then(() => {
        return Entry.find()
          .lean()
          .then(entries => res.json(entries))
          .catch(next);
      })
      .catch(next);        
  })
  
  .delete('/:id', (req, res, next) => {
    return Entry.findByIdAndRemove(req.params.id)
      .then(() => {
        return Entry.find()
          .lean()
          .then(entries => res.json(entries))
          .catch(next);
      })
      .catch(next);
  });