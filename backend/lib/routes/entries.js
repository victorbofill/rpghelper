const router = require('express').Router();
const Entry = require('../models/Entry');
const { updateOptions } = require('../utils/mongoose-helpers');

module.exports = router
  .post('/', async(req, res) => {
    const newEntry = await Entry.create(req.body)
      .catch(err => console.err(err));
    return res.json(newEntry);
  })

  .get('/', async(req, res, next) => {
    const entries = await Entry.find()
      .catch(err => next(err));
    return res.json(entries);
  })

  .get('/:id', async(req, res, next) => {
    const entry = await Entry.findById(req.params.id).lean()
      .catch(err => next(err));
    return res.json(entry);
  })    

  .put('/:id', async(req, res, next) => {
    const updatedEntry = await Entry.findByIdAndUpdate(req.params.id, req.body, updateOptions)
      .catch(err => next(err));
    return res.json(updatedEntry);
  })
  
  .delete('/:id', async(req, res, next) => {
    const deletedEntry = await Entry.findByIdAndRemove(req.params.id)
      .catch(err => next(err));
    return res.json(deletedEntry);
  });