const router = require('express').Router();
const Location = require('../models/Location');
const { updateOptions } = require('../utils/mongoose-helpers');

module.exports = router
  .get('/', (req, res, next) => {
    Location.find()
      .lean()
      .populate('npcs')
      .populate('stories')
      .then(location => res.json(location))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Location.findById(req.params.id)
      .lean()
      .populate('npcs')
      .populate('stories')
      .then(location => res.json(location))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    Location.create(req.body)
      .then(location => res.json(location))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    const {
      url,
      name,
      description,
      finances,
      sublocations
    } = req.body;

    const update = {
      url,
      name,
      description,
      finances,
      sublocations
    };

    Object.keys(update).forEach(key => {if(!update[key]) delete update[key];});

    return Location.findByIdAndUpdate(req.params.id, update, updateOptions)
      .then(updated => res.json(updated))
      .catch(next);
  })

  .put('/:id/npcs', (req, res, next) => {
    return Location.findByIdAndUpdate(req.params.id, {
      $addToSet: { npcs: req.body.id }
    }, updateOptions)
      .then(updated => res.json(updated))
      .catch(next);        
  })

  .put('/:id/stories', (req, res, next) => {
    return Location.findByIdAndUpdate(req.params.id, {
      $addToSet: { stories: req.body.id }
    }, updateOptions) 
      .then(updated => res.json(updated))
      .catch(next);        
  });