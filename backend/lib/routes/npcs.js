const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Location = require('../models/Location');
const NPC = require('../models/NPC');

module.exports = router
  .post('/locations/:id/npcs', (req, res) => {
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

  .delete('/locations/:id/npcs/:npcId', (req, res) => {
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

  .get('/locations/:id/npcs', (req, res, next) => {
    NPC.find()
      .lean()
      .then(npc => res.json(npc))
      .catch(next);
  })

  .put('/locations/:id/npcs/:npcId', (req, res, next) => {
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
  });
  