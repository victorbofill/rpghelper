const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Story = require('../models/Story');
const Chapter = require('../models/Story');

module.exports = router
  .post('/', async(req, res, next) => {
    const story = await Story.create(req.body).catch(next);
    return res.json(story);
  })

  .post('/:id/chapter', async(req, res, next) => {
    const chapter = await Chapter.create(req.body);
    await Story.findByIdAndUpdate(req.params.id, {
      $addToSet: { chapters: chapter._id }
    }, updateOptions)
      .catch(next);
    return res.json(chapter);
  })

  .get('/', async(req, res, next) => {
    const story = await Story.find().populate('chapters').catch(next);
    return res.json(story);
  })

  .get('/:id', async(req, res, next) => {
    const story = await Story.findById(req.params.id).populate('chapters').catch(next);
    return res.json(story);
  })

  .put('/:id', async(req, res, next) => {
    const { url, name, description, reward } = req.body;
    const update = { url, name, description, reward };

    Object.keys(update).forEach(key => {if(!update[key]) delete update[key];});

    const newStory = await Story.findByIdAndUpdate(req.params.storyId, update, updateOptions)
      .catch(next);

    return res.json(newStory);
  })

  .delete('/:id', async(req, res, next) => {
    await Story.findByIdAndRemove(req.params.id).catch(next);
    return res.json({ deleted: true });
  })

  .delete('/:id/chapters/:chapterId', async(req, res, next) => {
    await Chapter.findByIdAndRemove(req.params.chapterId)
      .catch(next);

    await Story.findByIdAndUpdate(req.params.id, {
      $pull: { chapters: req.params.id }
    }, updateOptions)
      .catch(next);
    return res.json({ deleted: true });
  });
