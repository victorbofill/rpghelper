const router = require('express').Router();
const { updateOptions } = require('../utils/mongoose-helpers');

const Base = require('../models/Base');
const NPC = require('../models/NPC');

module.exports = router
  .post('/', async(req, res, next) => {
    const { baseId } = req.body;
    const newNPC = await NPC.create({});
    await Base.findByIdAndUpdate(baseId, {
      $addToSet: { npcs: newNPC._id }
    }, updateOptions)
      .catch(next);
    return res.json(newNPC);
  })
 
  .get('/', (req, res, next) => {
    return NPC.find()
      .lean()
      .then(NPCs => res.json(NPCs))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    return NPC.findById(req.params.id)
      .lean()
      .then(NPC => res.json(NPC))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    const {
      url,
      name,
      description,
      relationship,
      money,
      str,
      agi,
      end,
      will,
      cha,
      rea,
      per,
      notes,
      skills
    } = req.body;

    const update = {
      url,
      name,
      description,
      relationship,
      money,
      str,
      agi,
      end,
      will,
      cha,
      rea,
      per,
      notes,
      skills
    };

    Object.keys(update).forEach(key => {if(!update[key]) delete update[key];});

    return NPC.findByIdAndUpdate(req.params.id, update, updateOptions)
      .then(updated => res.send(updated))
      .catch(next);        
  })

  .delete('/:id', async(req, res) => {
    await NPC.findByIdAndRemove(req.params.id);
    await Base.findByIdAndUpdate(req.params.id, {
      $pull: { NPCs: req.params.id }
    }, updateOptions)
      .catch(err => res.send(err));
    res.send({ deleted: true });
  });
  