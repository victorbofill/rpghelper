const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Base = require('../models/Base');
const NPC = require('../models/NPC');

module.exports = router
  .post('/', (req, res) => {
    NPC.create({})
      .then(NPC => {
        return Base.findByIdAndUpdate(req.body.baseId, {
          $addToSet: { NPCs: NPC._id }
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
      description
    } = req.body;

    const update = {
      url,
      name,
      description
    };

    Object.keys(update).forEach(key => {if(!update[key]) delete update[key];});

    return NPC.findByIdAndUpdate(req.params.id, update, updateOptions)
      .then(updated => res.send(updated))
      .catch(next);        
  })

  .delete('/:id', (req, res) => {
    return NPC.findByIdAndRemove(req.params.id)
      .then(removed => {
        return Base.findByIdAndUpdate(removed.regionId, {
          $pull: { NPCs: removed._id }
        }, updateOptions)
          .catch(err => res.send(err));
      })
      .then(() => res.send({ deleted : true }))
      .catch(err => res.send(err));
  });
  