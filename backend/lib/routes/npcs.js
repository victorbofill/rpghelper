const router = require('express').Router();
const NPC = require('../models/NPC');
const { updateOptions } = require('../utils/mongoose-helpers');

module.exports = router
  .get('/', (req, res, next) => {
    NPC.find()
      .lean()
      .then(location => res.json(location))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    NPC.create(req.body)
      .then(location => res.json(location))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    const {
      name,
      disposition,
      stats,
      notes
    } = req.body;

    const update = {
      name,
      disposition,
      stats,
      notes
    };

    Object.keys(update).forEach(key => {if(!update[key]) delete update[key];});

    return NPC.findByIdAndUpdate(req.params.id, update, updateOptions)
      .then(updated => res.json(updated))
      .catch(next);        
  })

  .delete(':id', (req, res, next) => {
    return NPC.findByIdAndRemove(req.params.id)
      .then(() => res.json({ deleted: true }))
      .catch(next);
  });