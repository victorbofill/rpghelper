const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Region = require('../models/Region');

module.exports = router
  .post('/', async(req, res, next) => {
    const newRegion = await Region.create({})
      .catch(next);
    return res.json(newRegion);
  })

  .get('/', async(req, res, next) => {
    const regions = await Region.find()
      .catch(next);
    return res.json(regions);
  })

  .get('/:id', async(req, res, next) => {
    const region = await Region.findById(req.params.id)
      .catch(next);
    return res.json(region);
  })

  .get('/:id/subregions', async(req, res, next) => {
    const { subregions } = await Region.findById(req.params.id).populate('subregions')
      .catch(next);
    return res.json(subregions);
  })

  .put('/:id', async(req, res, next) => {
    const { url, name, description } = req.body;
    const update = { url, name, description };

    Object.keys(update).forEach(key => {if(!update[key]) delete update[key];});

    const updatedRegion = await Region.findByIdAndUpdate(req.params.id, update, updateOptions)
      .catch(next);

    return res.json(updatedRegion);
  })

  .delete('/:id', async(req, res, next) => {
    const deletedRegion = Region.findByIdAndRemove(req.params.id)
      .catch(next);
    return res.send(deletedRegion);
  });
