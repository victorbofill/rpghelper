const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Region = require('../models/Region');

module.exports = router
  .post('/', (req, res, next) => {
    return Region.create({})
      .then(region => res.json(region))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    return Region.find()
      .lean()
      .then(region => res.json(region))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    return Region.findById(req.params.id)
      .lean()
      .then(region => res.json(region))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    const {
      url,
      name
    } = req.body;

    const update = {
      url,
      name
    };

    Object.keys(update).forEach(key => {if(!update[key]) delete update[key];});

    return Region.findByIdAndUpdate(req.params.id, update, updateOptions)
      .then(updated => res.json(updated))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    return Region.findByIdAndRemove(req.params.id)
      .then(() => res.send({ deleted : true }))
      .catch(next);
  });
