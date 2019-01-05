const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const City = require('../models/City');
const Location = require('../models/Location');

module.exports = router
  .post('/', (req, res, next) => {
    Location.create(req.body)
      .then(location => {
        return City.findByIdAndUpdate(req.body.cityId, {
          $addToSet: { locations: location._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(location => res.send(location))
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
      .then(removed => {
        return City.findByIdAndUpdate(removed.cityId, {
          $pull: { locations: removed._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(() => res.send({ deleted: true }))
      .catch(next);
  });
