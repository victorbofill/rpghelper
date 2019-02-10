const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Location = require('../models/Location');
const Base = require('../models/Base');

module.exports = router
  .post('/', async(req, res, next) => {
    const { locationId } = req.body;
    const newBase = await Base.create({});
    await Location.findByIdAndUpdate(locationId, {
      $addToSet: { bases: newBase._id }
    }, updateOptions)
      .catch(next);
    return res.json(newBase);
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

  .get('/:id/assets', async(req, res, next) => {
    const { assets } = await Base.findById(req.params.id).populate('assets')
      .catch(next);
    return res.json(assets);
  })

  .get('/:id/npcs', async(req, res, next) => {
    const { npcs } = await Base.findById(req.params.id).populate('npcs')
      .catch(next);
    return res.json(npcs);
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

  .delete('/:id', async(req, res) => {
    await Base.findByIdAndRemove(req.params.id);
    await Location.findByIdAndUpdate(req.params.id, {
      $pull: { bases: req.params.id }
    }, updateOptions)
      .catch(err => res.send(err));
    res.send({ deleted: true });
  });
  