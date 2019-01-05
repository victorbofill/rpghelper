const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Location = require('../models/Location');
const Sublocation = require('../models/Sublocation');

module.exports = router
  .post('/', (req, res) => {
    Sublocation.create(req.body)
      .then(sublocation => {
        return Location.findByIdAndUpdate(req.body.locationId, {
          $addToSet: { sublocations: sublocation._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(res => res.send(res))
      .catch(err => res.send(err));
  })

  .put('/:id', (req, res, next) => {
    const {
      url,
      name,
      description
    } = req.body;

    const update = {
      url,
      name,
      description
    };

    Object.keys(update).forEach(key => {if(!update[key]) delete update[key];});

    return Sublocation.findByIdAndUpdate(req.params.id, update, updateOptions)
      .then(updated => res.send(updated))
      .catch(next);        
  })

  .delete('/:id', (req, res) => {
    return Sublocation.findByIdAndRemove(req.params.id)
      .then(removed => {
        return Location.findByIdAndUpdate(removed.locationId, {
          $pull: { sublocations: removed._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(() => res.send({ deleted : true }))
      .catch(err => res.send(err));
  });
  