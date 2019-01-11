const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Region = require('../models/Region');
const Subregion = require('../models/Subregion');

module.exports = router
  .post('/', (req, res) => {
    Subregion.create({})
      .then(subregion => {
        return Region.findByIdAndUpdate(req.body.regionId, {
          $addToSet: { subregions: subregion._id }
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

    return Subregion.findByIdAndUpdate(req.params.id, update, updateOptions)
      .then(updated => res.send(updated))
      .catch(next);        
  })

  .delete('/:id', (req, res) => {
    return Subregion.findByIdAndRemove(req.params.id)
      .then(removed => {
        return Region.findByIdAndUpdate(removed.regionId, {
          $pull: { subregions: removed._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(() => res.send({ deleted : true }))
      .catch(err => res.send(err));
  });
  