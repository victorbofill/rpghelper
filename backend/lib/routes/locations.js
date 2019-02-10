const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Subregion = require('../models/Subregion');
const Location = require('../models/Location');

module.exports = router
  .post('/', async(req, res, next) => {
    const { subregionId } = req.body;
    const newLocation = await Location.create({});
    await Subregion.findByIdAndUpdate(subregionId, {
      $addToSet: { subregions: newLocation._id }
    }, updateOptions)
      .catch(next);
    return res.json(newLocation);
  })
 
  .get('/', (req, res, next) => {
    return Location.find()
      .lean()
      .then(location => res.json(location))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    return Location.findById(req.params.id)
      .lean()
      .then(location => res.json(location))
      .catch(next);
  })

  .get('/:id/bases', async(req, res, next) => {
    const { bases } = await Location.findById(req.params.id).populate('bases')
      .catch(next);
    return res.json(bases);
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

  .delete('/:id', async(req, res) => {
    await Location.findByIdAndRemove(req.params.id);
    await Subregion.findByIdAndUpdate(req.params.id, {
      $pull: { locations: req.params.id }
    }, updateOptions)
      .catch(err => res.send(err));
    res.send({ deleted: true });
  });
  