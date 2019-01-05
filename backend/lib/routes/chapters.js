const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Story = require('../models/Story');
const Chapter = require('../models/Chapter');

module.exports = router
  .post('/', (req, res, next) => {
    Chapter.create(req.body)
      .then(chapter => {
        return Story.findByIdAndUpdate(req.body.storyId, {
          $addToSet: { chapters: chapter._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(chapter => res.send(chapter))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    const {
      url,
      name,
      description,
      reward,
      status
    } = req.body;

    const update = {
      url,
      name,
      description,
      reward,
      status
    };

    Object.keys(update).forEach(key => {if(!update[key]) delete update[key];});

    return Chapter.findByIdAndUpdate(req.params.id, update, updateOptions)
      .then(updated => res.json(updated))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    return Chapter.findByIdAndRemove(req.params.id)
      .then(removed => {
        return Story.findByIdAndUpdate(removed.storyId, {
          $pull: { chapters: removed._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(() => res.send({ deleted: true }))
      .catch(next);
  });
