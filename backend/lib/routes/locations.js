const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Location = require('../models/Location');
const NPC = require('../models/NPC');
const Story = require('../models/Story');
const Sublocation = require('../models/Sublocation');

module.exports = router
  .get('/', (req, res, next) => {
    Location.find()
      .lean()
      .populate('npcs')
      .populate('stories')
      .populate('sublocations')
      .then(location => res.json(location))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Location.findById(req.params.id)
      .lean()
      .populate('npcs')
      .populate('stories')
      .populate('sublocations')
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

  .post('/:id/npcs', (req, res) => {
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

  .delete('/:id/npcs/:npcId', (req, res) => {
    return NPC.findByIdAndRemove(req.params.npcId)
      .then(removed => {
        return Location.findByIdAndUpdate(req.params.id, {
          $pull: { npcs: removed._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(() => res.json({ deleted : true }))
      .catch(err => res.send(err));
  })

  .get('/:id/npcs', (req, res, next) => {
    NPC.find()
      .lean()
      .then(npc => res.json(npc))
      .catch(next);
  })

  .put('/:id/npcs/:npcId', (req, res, next) => {
    const {
      url,
      name,
      disposition,
      stats
    } = req.body;

    const update = {
      url,
      name,
      disposition,
      stats
    };

    Object.keys(update).forEach(key => {if(!update[key]) delete update[key];});

    return NPC.findByIdAndUpdate(req.params.npcId, update, updateOptions)
      .then(updated => res.json(updated))
      .catch(next);        
  })

// STORY ROUTES

  .post('/:id/stories', (req, res, next) => {
    Story.create(req.body)
      .then(story => {
        return Location.findByIdAndUpdate(req.params.id, {
          $addToSet: { stories: story._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(story => res.json(story))
      .catch(next);
  })

  .delete('/:id/stories/:storyId', (req, res) => {
    return Story.findByIdAndRemove(req.params.storyId)
      .then(removed => {
        return Location.findByIdAndUpdate(req.params.id, {
          $pull: { stories: removed._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
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

// SUBLOCATION ROUTES
  .post('/:id/sublocations', (req, res) => {
    Sublocation.create(req.body)
      .then(sublocation => {
        return Location.findByIdAndUpdate(req.params.id, {
          $addToSet: { sublocations: sublocation._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(sublocation => res.send(sublocation))
      .catch(err => res.send(err));
  })

  .delete('/:id/sublocations/:sublocationId', (req, res) => {
    return Sublocation.findByIdAndRemove(req.params.sublocationId)
      .then(removed => {
        return Location.findByIdAndUpdate(req.params.id, {
          $pull: { sublocations: removed._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(() => res.send({ deleted : true }))
      .catch(err => res.send(err));
  });

