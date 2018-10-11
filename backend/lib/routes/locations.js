const router = require('express').Router();
const Location = require('../models/Location');
const NPC = require('../models/NPC');
const Story = require('../models/Story');
const { updateOptions } = require('../utils/mongoose-helpers');

module.exports = router
  .get('/', (req, res, next) => {
    Location.find()
      .lean()
      .populate('npcs')
      .populate('stories')
      .then(location => res.json(location))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Location.findById(req.params.id)
      .lean()
      .populate('npcs')
      .populate('stories')
      .then(location => res.json(location))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    Location.create(req.body)
      .then(location => res.json(location))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    const {
      url,
      name,
      description,
      finances
    } = req.body;

    const update = {
      url,
      name,
      description,
      finances
    };

    Object.keys(update).forEach(key => {if(!update[key]) delete update[key];});

    return Location.findByIdAndUpdate(req.params.id, update, updateOptions)
      .then(updated => res.json(updated))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    return Location.findByIdAndRemove(req.params.id)
      .then(data => res.send(data))
      .catch(next);
  })
 
  .put('/:id/npcs', (req, res, next) => {
    return Location.findByIdAndUpdate(req.params.id, {
      $addToSet: { npcs: req.body.id }
    }, updateOptions)
      .then(updated => res.json(updated))
      .catch(next);        
  })

  .put('/:id/stories', (req, res, next) => {
    return Location.findByIdAndUpdate(req.params.id, {
      $addToSet: { stories: req.body.id }
    }, updateOptions) 
      .then(updated => res.json(updated))
      .catch(next);        
  })

// NPC ROUTES

  .post('/:id/npcs', (req, res, next) => {
    NPC.create(req.body)
      .then(npc => {
        return Location.findByIdAndUpdate(req.params.id, {
          $addToSet: { npcs: npc._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(res => res.json(res))
      .catch(err => res.send(err));
  })

  .delete('/:id/npcs/:npcId', (req, res, next) => {
    return NPC.findByIdAndRemove(req.params.npcId)
      .then(data => res.json(data))
      .catch(next);
  })

  .get('/:id/npcs', (req, res, next) => {
    NPC.find()
      .lean()
      .then(npc => res.json(npc))
      .catch(next);
  })

  .put('/:id/npcs/:npcId', (req, res, next) => {
    const {
      name,
      disposition,
      stats,
      notes
    } = req.body;

    const update = {
      name,
      disposition,
      stats,
      notes
    };

    Object.keys(update).forEach(key => {if(!update[key]) delete update[key];});

    return NPC.findByIdAndUpdate(req.params.npcId, update, updateOptions)
      .then(updated => res.json(updated))
      .catch(next);        
  })

// STORY ROUTES

  .post('/:id/stories', (req, res, next) => {
    Story.create(req.body)
      .then(story => res.json(story))
      .catch(next);
  })

  .get('/:id/stories', (req, res, next) => {
    Story.find()
      .lean()
      .then(story => res.json(story))
      .catch(next);
  })

  .get('/:id/stories/:storyId', (req, res, next) => {
    Story.findById(req.params.storyId)
      .lean()
      .then(story => res.json(story))
      .catch(next);
  })

  .put('/:id/stories/:storyId', (req, res, next) => {
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
      .catch(next);
  });
