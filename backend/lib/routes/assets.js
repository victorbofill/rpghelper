const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Base = require('../models/Base');
const Asset = require('../models/Asset');

module.exports = router
  .post('/', async(req, res, next) => {
    const { baseId } = req.body;
    const newAsset = await Base.create({});
    await Base.findByIdAndUpdate(baseId, {
      $addToSet: { subregions: newAsset._id }
    }, updateOptions)
      .catch(next);
    return res.json(newAsset);
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

  .delete('/:id', async(req, res) => {
    await Asset.findByIdAndRemove(req.params.id);
    await Base.findByIdAndUpdate(req.params.id, {
      $pull: { assets: req.params.id }
    }, updateOptions)
      .catch(err => res.send(err));
    res.send({ deleted: true });
  });
  