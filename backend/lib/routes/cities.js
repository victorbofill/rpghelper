const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Region = require('../models/Region');
const City = require('../models/City');

module.exports = router
  .post('/', (req, res) => {
    City.create(req.body)
      .then(city => {
        return Region.findByIdAndUpdate(req.body.regionId, {
          $addToSet: { cities: city._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(city => res.send(city))
      .catch(err => res.send(err));
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

    return City.findByIdAndUpdate(req.params.cityId, update, updateOptions)
      .then(updated => res.send(updated))
      .catch(next);        
  })
  
  .delete('/:id', (req, res) => {
    return City.findByIdAndRemove(req.params.id)
      .then(removed => {
        return Region.findByIdAndUpdate(removed.regionId, {
          $pull: { cities: removed._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(() => res.send({ deleted : true }))
      .catch(err => res.send(err));
  });
