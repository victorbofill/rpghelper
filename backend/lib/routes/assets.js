const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Base = require('../models/Base');
const Asset = require('../models/Asset');

module.exports = router
  .post('/', (req, res) => {
    Asset.create({})
      .then(asset => {
        return Base.findByIdAndUpdate(req.body.baseId, {
          $addToSet: { assets: asset._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(res => res.send(res))
      .catch(err => res.send(err));
  })
 
  .get('/', (req, res, next) => {
    return Asset.find()
      .lean()
      .then(asset => res.json(asset))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    return Asset.findById(req.params.id)
      .lean()
      .then(asset => res.json(asset))
      .catch(next);
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

    return Asset.findByIdAndUpdate(req.params.id, update, updateOptions)
      .then(updated => res.send(updated))
      .catch(next);        
  })

  .delete('/:id', (req, res) => {
    return Asset.findByIdAndRemove(req.params.id)
      .then(removed => {
        return Base.findByIdAndUpdate(removed.regionId, {
          $pull: { assets: removed._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(() => res.send({ deleted : true }))
      .catch(err => res.send(err));
  });
  