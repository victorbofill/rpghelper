const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Location = require('../models/Location');
const Base = require('../models/Base');

module.exports = router
  .post('/', (req, res) => {
    Base.create({})
      .then(base => {
        return Location.findByIdAndUpdate(req.body.locationId, {
          $addToSet: { bases: base._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(res => res.send(res))
      .catch(err => res.send(err));
  })
 
  .get('/', (req, res, next) => {
    return Base.find()
      .lean()
      .then(base => res.json(base))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    return Base.findById(req.params.id)
      .lean()
      .then(base => res.json(base))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    const {
      url,
      name,
      description,
      income,
      overhead,
      profit    
    } = req.body;

    const update = {
      url,
      name,
      description,
      income,
      overhead,
      profit    
    };

    Object.keys(update).forEach(key => {if(!update[key]) delete update[key];});

    return Base.findByIdAndUpdate(req.params.id, update, updateOptions)
      .then(updated => res.send(updated))
      .catch(next);        
  })

  .delete('/:id', (req, res) => {
    return Base.findByIdAndRemove(req.params.id)
      .then(removed => {
        return Location.findByIdAndUpdate(removed.locationId, {
          $pull: { locations: removed._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(() => res.send({ deleted : true }))
      .catch(err => res.send(err));
  });
  