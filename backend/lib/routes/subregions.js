const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Region = require('../models/Region');
const Subregion = require('../models/Subregion');

module.exports = router
  .post('/', async(req, res, next) => {
    const { regionId } = req.body;
    const newSubregion = await Subregion.create({});
    await Region.findByIdAndUpdate(regionId, {
      $addToSet: { subregions: newSubregion._id }
    }, updateOptions)
      .catch(next);
    return res.json(newSubregion);
  })
 
  .get('/', (req, res, next) => {
    return Subregion.find()
      .lean()
      .then(subregion => res.json(subregion))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    return Subregion.findById(req.params.id)
      .lean()
      .then(subregion => res.json(subregion))
      .catch(next);
  })

  .get('/:id/locations', async(req, res, next) => {
    const { locations } = await Subregion.findById(req.params.id).populate('locations')
      .catch(next);
    return res.json(locations);
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

  .delete('/:id', async(req, res) => {
    await Subregion.findByIdAndRemove(req.params.id);
    await Region.findByIdAndUpdate(req.params.id, {
      $pull: { subregions: req.params.id }
    }, updateOptions)
      .catch(err => res.send(err));
    res.send({ deleted: true });
  });
