const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Location = require('../models/Location');
const Sublocation = require('../models/Sublocation');

module.exports = router
  .post('/', (req, res, next) => {
    Location.create(req.body)
      .then(location => res.json(location))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Location.find()
      .lean()
      .populate('sublocations')
      .populate('npcs')
      .then(location => res.json(location))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Location.findById(req.params.id)
      .lean()
      .populate('sublocations')
      .populate('npcs')
      .then(location => res.json(location))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    const {
      url,
      name,
      description,
      assets,
      income,
      overhead,
      profit
    } = req.body;

    const update = {
      url,
      name,
      description,
      assets,
      income,
      overhead,
      profit
    };

    Object.keys(update).forEach(key => {if(!update[key]) delete update[key];});

    return Location.findByIdAndUpdate(req.params.id, update, updateOptions)
      .then(updated => res.json(updated))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    return Location.findByIdAndRemove(req.params.id)
      .then(data => res.send(data))
      .catch(next);
  })
 
  .put('/:id/npcs', (req, res, next) => {
    return Location.findByIdAndUpdate(req.params.id, {
      $addToSet: { npcs: req.body.id }
    }, updateOptions)
      .then(updated => res.json(updated))
      .catch(next);        
  })

// SUBLOCATION ROUTES
  .post('/:id/sublocations', (req, res) => {
    Sublocation.create(req.body)
      .then(sublocation => {
        return Location.findByIdAndUpdate(req.params.id, {
          $addToSet: { sublocations: sublocation._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(sublocation => res.send(sublocation))
      .catch(err => res.send(err));
  })

  .delete('/:id/sublocations/:sublocationId', (req, res) => {
    return Sublocation.findByIdAndRemove(req.params.sublocationId)
      .then(removed => {
        return Location.findByIdAndUpdate(req.params.id, {
          $pull: { sublocations: removed._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(() => res.send({ deleted : true }))
      .catch(err => res.send(err));
  });
