const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Chapter = require('../models/Chapter');
const Story = require('../models/Story');

module.exports = router
  .post('/', async(req, res, next) => {
    const { storyId } = req.body;
    const newChapter = await Chapter.create({});
    await Story.findByIdAndUpdate(storyId, {
      $addToSet: { chapters: newChapter._id }
    }, updateOptions)
      .catch(next);
    return res.json(newChapter);
  })

  .put('/:id', async(req, res, next) => {
    const { url, name, description, status, reward, unlocks, } = req.body;
    const update = { url, name, description, status, reward, unlocks };

    Object.keys(update).forEach(key => {if(!update[key]) delete update[key];});

    const updatedChapter = Chapter.findByIdAndUpdate(req.params.id, update, updateOptions)
      .catch(next);

    return res.json(updatedChapter);
  })

  .delete('/:id/chapters/:chapterId', async(req, res, next) => {
    await Chapter.findByIdAndRemove(req.params.chapterId).catch(next);
    await Story.findByIdAndUpdate(req.params.id, {
      $pull: { chapters: req.params.id }
    }, updateOptions).catch(next);
    return res.json({ deleted: true });
  });
