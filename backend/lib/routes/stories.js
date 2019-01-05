const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Story = require('../models/Story');

module.exports = router
  .post('/', (req, res, next) => {
    Story.create(req.body)
      .then(story => res.send(story))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Story.find()
      .lean()
      .populate('chapters')
      .then(story => res.json(story))
      .catch(next);
  })

  .put('/:id', (req, res) => {
    const {
      name,
      description,
      available,
      patron,
      reward,
      notes
    } = req.body;
    
    const update = {
      name,
      description,
      available,
      patron,
      reward,
      notes
    };
    
    Object.keys(update).forEach(key => {if(!update[key]) delete update[key];});
    
    return Story.findByIdAndUpdate(req.params.storyId, update, updateOptions)
      .then(updated => res.json(updated))
      .catch(err => res.send(err));
  })

  .delete('/:id', (req, res) => {
    return Story.findByIdAndRemove(req.params.id)
      .then(() => res.json({ deleted : true }))
      .catch(err => res.send(err));
  })    ;
