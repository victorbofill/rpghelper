const router = require('express').Router();
const Participant = require('../models/Participant');
const { updateOptions } = require('../utils/mongoose-helpers');

module.exports = router
  .post('/', (req, res, next) => {
    Participant.create({})
      .then(body => res.json(body))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Participant.find()
      .lean()
      .then(body => res.send(body))
      .catch(next);
  })    

  .put('/:id', (req, res, next) => {
    const {
      name, str, agi, end, will, cha, rea, per,
      apAdjust, ap, dr, hp, guard, disposition, subtlety, insight, awareness,
      bleeding, blinded, burning, crippled, deafened, afraid, prone, dead, immobilized, unconscious
    } = req.body;

    const update = {
      name, str, agi, end, will, cha, rea, per,
      apAdjust, ap, dr, hp, guard, disposition, subtlety, insight, awareness,
      bleeding, blinded, burning, crippled, deafened, afraid, prone, dead, immobilized, unconscious
    };

    Object.keys(update).forEach(key => {if(!update[key]) delete update[key];});

    return Participant.findByIdAndUpdate(req.params.id, update, updateOptions)
      .then(updated => res.json(updated))
      .catch(next);        
  })

  .delete('/:id', (req, res, next) => {
    return Participant.findByIdAndRemove(req.params.id)
      .then(() => res.json({}))
      .catch(next);
  });