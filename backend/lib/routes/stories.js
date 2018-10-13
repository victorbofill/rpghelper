const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Story = require('../models/Story');
const Chapter = require('../models/Chapter');

module.exports = router
  .post('/', (req, res, next) => {
    Story.create(req.body)
      .then(story => res.send(story))
      .catch(next);
  })

  .delete('/:id', (req, res) => {
    return Story.findByIdAndRemove(req.params.id)
      .then(() => res.json({ deleted : true }))
      .catch(err => res.send(err));
  })

  .get('/', (req, res, next) => {
    Story.find()
      .lean()
      .populate('chapters')
      .then(story => res.json(story))
      .catch(next);
  })

  .get('/:id', (req, res) => {
    Story.findById(req.params.storyId)
      .lean()
      .then(story => res.json(story))
      .catch(err => res.send(err));
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

// CHAPTER ROUTES
  .post('/:id/chapters', (req, res, next) => {
    Chapter.create(req.body)
      .then(chapter => {
        return Story.findByIdAndUpdate(req.params.storyId, {
          $addToSet: { chapters: chapter._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(chapter => res.json(chapter))
      .catch(next);
  })

  .delete('/:id/chapters/:chapterId', (req, res) => {
    return Story.findByIdAndRemove(req.params.chapterId)
      .then(() => res.json({ deleted : true }))
      .catch(err => res.send(err));
  });
