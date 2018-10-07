const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

let location = {
  url: 'macs',
  name: 'Mac\'s',
  description: 'A bar',
  finances: {
    assets: 1000,
    income: 150,
    overhead: 200,
    profit: -50
  },
  sublocations: [
    {
      name: 'The kitchen',
      description: 'Food is made here.',
      active: true
    }
  ]
};

let npc = {
  name: 'MacGuffin',
  disposition: 'Friendly',
  stats: {
    dr: 0,
    money: 500,
    attributes: {
      str: 2,
      agi: 1,
      end: 3,
      will: 2,
      cha: 4,
      rea: 3,
      per: 3
    }
  },
  notes: ['This is a note', 'And another note']
};

let story = {
  name: 'Meet at the bar',
  description: 'Mac wants to see you',
  available: true,
  complete: false,
  patron: 'MacGuffin',
  reward: 'You get a free drink.',
  notes: ['Mac will always drop what he\'s doing to greet the party.'],
  type: 'job',
};

let id = null;

describe('Profile API', () => {
  before(() => dropCollection('locations'));
  before(() => dropCollection('npcs'));
  before(() => dropCollection('stories'));

  before(() => {
    return request.post('/api/npcs')
      .send(npc)
      .then(({ body }) => npc.id = body._id);
  });

  before(() => {
    return request.post('/api/stories')
      .send(story)
      .then(({ body }) => story._id = body._id);
  });

  it('Creates a locations', () => {
    return request.post('/api/locations')
      .send(location)
      .then(({ body }) => {
        assert.ok(body._id);
        id = body._id;
      });
  });

  it('Updates a location', () => {
    return request.put(`/api/locations/${id}`)
      .send({ finances: { assets: 1500, income: 300, overhead: 200, profit: 100 }})
      .then(({ body }) => {
        assert.equal(body.finances.profit, 100);
        assert.equal(body.finances.overhead, 200);
      });
  });

  it('Adds an NPC to a location', () => {
    return request.put(`/api/locations/${id}/npcs`)
      .send({ id: npc.id })
      .then(({ body }) => {
        assert.equal(body.npcs.length, 1);
      });
  });

  it('Adds a story to a location', () => {
    return request.put(`/api/locations/${id}/stories`)
      .send({ id: story._id })
      .then(({ body }) => {
        assert.equal(body.stories.length, 1);
      });
  });
});