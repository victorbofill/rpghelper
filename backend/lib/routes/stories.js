const router = require('express').Router();
const Story = require('../models/Story');
const { updateOptions } = require('../utils/mongoose-helpers');

module.exports = router
  .post('/', (req, res, next) => {
    Story.create(req.body)
      .then(story => res.json(story))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Story.find()
      .lean()
      .then(story => res.json(story))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Story.findById(req.params.id)
      .lean()
      .then(story => res.json(story))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    const {
      name,
      description,
      available,
      patron,
      reward,
      notes
    } = req.body;

    const update = {
      name,
      description,
      available,
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
      $addToSet: { unlocks: req.body.id }
    }, updateOptions)
      .then(updated => res.json(updated))
      .catch(next);
  })

  .put('/:id/complete', (req, res, next) => {
    return Story.findByIdAndUpdate(req.params.id, { complete: true }, updateOptions)
      .then(body => {
        return Story.update(
          { _id: { $in: body.unlocks }},
          { $set: { available: true }}
        );        
      })
      .then(updated => res.json(updated))
      .catch(next);
  });