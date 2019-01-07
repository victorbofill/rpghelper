const router = require('express').Router();
const Participant = require('../models/Participant');
const { updateOptions } = require('../utils/mongoose-helpers');

module.exports = router
  .post('/', (req, res, next) => {
    return Participant.create({})
      .then(() => {
        return Participant.find()
          .lean()
          .then(body => res.send(body))
          .catch(next);  
      })
      .catch(next);
  })

  .get('/', (req, res, next) => {
    return Participant.find()
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
      .then(() => {
        return Participant.find()
          .lean()
          .then(body => res.send(body))
          .catch(next);  
      })
      .catch(next);        
  })

  .delete('/:id', (req, res, next) => {
    return Participant.findByIdAndRemove(req.params.id)
      .then(() => {
        return Participant.find()
          .lean()
          .then(body => res.send(body))
          .catch(next);  
      })
      .catch(next);  
  });