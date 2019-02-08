const router = require('express').Router();
const Note = require('../models/Note');
const { updateOptions } = require('../utils/mongoose-helpers');

module.exports = router
  .post('/', async(req, res) => {
    const newNote = await Note.create(req.body)
      .catch(err => console.err(err));
    return res.json(newNote);
  })

  .get('/', async(req, res, next) => {
    const notes = await Note.find()
      .catch(err => next(err));
    return res.json(notes);
  })

  .get('/:id', async(req, res, next) => {
    const note = await Note.findById(req.params.id).lean()
      .catch(err => next(err));
    return res.json(note);
  })    

  .put('/:id', async(req, res, next) => {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, updateOptions)
      .catch(err => next(err));
    return res.json(updatedNote);
  })
  
  .delete('/:id', async(req, res, next) => {
    const deletedNote = await Note.findByIdAndRemove(req.params.id)
      .catch(err => next(err));
    return res.json(deletedNote);
  });