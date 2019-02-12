const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Chapter = require('../models/Chapter');

module.exports = router
  .put('/:id', async(req, res, next) => {
    const { url, name, description, status, reward, unlocks, } = req.body;
    const update = { url, name, description, status, reward, unlocks };

    Object.keys(update).forEach(key => {if(!update[key]) delete update[key];});

    const updatedChapter = Chapter.findByIdAndUpdate(req.params.id, update, updateOptions)
      .catch(next);

    return res.json(updatedChapter);
  });
