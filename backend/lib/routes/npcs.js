const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Location = require('../models/Location');
const NPC = require('../models/NPC');

module.exports = router
  .post('/', (req, res) => {
    NPC.create(req.body)
      .then(npc => {
        return Location.findByIdAndUpdate(req.body.locationId, {
          $addToSet: { npcs: npc._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(res => res.send(res))
      .catch(err => res.send(err));
  })

  .put('/:id', (req, res, next) => {
    const {
      url,
      name,
      relationship,
      money,
      str,
      agi,
      end,
      will,
      cha,
      rea,
      per,
    } = req.body;

    const update = {
      url,
      name,
      relationship,
      money,
      str,
      agi,
      end,
      will,
      cha,
      rea,
      per,
    };

    Object.keys(update).forEach(key => {if(!update[key]) delete update[key];});

    return NPC.findByIdAndUpdate(req.params.id, update, updateOptions)
      .then(updated => res.json(updated))
      .catch(next);        
  })
  
  .delete('/:id', (req, res) => {
    return NPC.findByIdAndRemove(req.params.id)
      .then(removed => {
        return Location.findByIdAndUpdate(removed.locationId, {
          $pull: { npcs: removed._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(() => res.json({ deleted : true }))
      .catch(err => res.send(err));
  });
