const router = require('express').Router();
const Story = require('../models/Story');
const { updateOptions } = require('../utils/mongoose-helpers');

module.exports = router
  .get('/', (req, res, next) => {
    Story.find()
      .lean()
      .then(location => res.json(location))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Story.findById(req.params.id)
      .lean()
      .then(location => res.json(location))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    Story.create(req.body)
      .then(location => res.json(location))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    const {
      name,
      description,
      available,
      complete,
      patron,
      reward,
      notes
    } = req.body;

    const update = {
      name,
      description,
      available,
      complete,
      patron,
      reward,
      notes
    };

    Object.keys(update).forEach(key => {if(!update[key]) delete update[key];});

    return Story.findByIdAndUpdate(req.params.id, update, updateOptions)
      .then(updated => res.json(updated))
      .catch(next);
  })

  .put('/:id/unlocks', (req, res, next) => {
    return Story.findByIdAndUpdate(req.params.id, {
      $addToSet: { unlocks: req.body }
    }, updateOptions)
      .then(updated => res.json(updated))
      .catch(next);        
  });