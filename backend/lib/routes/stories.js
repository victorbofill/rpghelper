const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Story = require('../models/Story');
const Chapter = require('../models/Chapter');

module.exports = router
  .post('/:id/stories', (req, res, next) => {
    Story.create(req.body)
      .then(story => res.json(story))
      .catch(next);
  })

  .delete('/:id/stories/:storyId', (req, res) => {
    return Story.findByIdAndRemove(req.params.storyId)
      .then(() => res.json({ deleted : true }))
      .catch(err => res.send(err));
  })

  .get('/:id/stories', (req, res, next) => {
    Story.find()
      .lean()
      .then(story => res.json(story))
      .catch(next);
  })

  .get('/:id/stories/:storyId', (req, res) => {
    Story.findById(req.params.storyId)
      .lean()
      .then(story => res.json(story))
      .catch(err => res.send(err));
  })

  .put('/:id/stories/:storyId', (req, res) => {
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
  .post('/:id/stories/:storyId/chapters', (req, res, next) => {
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

  .delete('/:id/stories/:storyId', (req, res) => {
    return Story.findByIdAndRemove(req.params.storyId)
      .then(() => res.json({ deleted : true }))
      .catch(err => res.send(err));
  })

  .get('/:id/stories', (req, res, next) => {
    Story.find()
      .lean()
      .then(story => res.json(story))
      .catch(next);
  });
