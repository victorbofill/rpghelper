const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Subregion = require('../models/Subregion');
const Location = require('../models/Location');

module.exports = router
  .post('/', (req, res) => {
    Location.create({})
      .then(location => {
        return Subregion.findByIdAndUpdate(req.body.regionId, {
          $addToSet: { locations: location._id }
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

    return Location.findByIdAndUpdate(req.params.id, update, updateOptions)
      .then(updated => res.send(updated))
      .catch(next);        
  })

  .delete('/:id', (req, res) => {
    return Location.findByIdAndRemove(req.params.id)
      .then(removed => {
        return Subregion.findByIdAndUpdate(removed.regionId, {
          $pull: { locations: removed._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(() => res.send({ deleted : true }))
      .catch(err => res.send(err));
  });
  