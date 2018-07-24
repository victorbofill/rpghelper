const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

let idOne = null;
let idTwo = null;

const storyOne = {
  name: 'It always starts in a bar',
  description: 'You\'re sitting in a bar, chillin\'. Your friend needs a drink.',
  available: true,
  complete: false,
  patron: 'John the Patron',
  reward: 'Drinks with John',
  type: 'job',
  notes: ['John doesn\'t own pants']
};

const storyTwo = {
  name: 'It continues in a bar',
  description: 'You and John want to drink together.',
  available: false,
  complete: false,
  patron: 'John the Patron',
  type: 'event',
  notes: []
};

describe('Profile API', () => {
  before(() => dropCollection('stories'));

  before(() => {
    request.post('/api/stories')
      .send(storyTwo)
      .then(({ body }) => idTwo = body._id);
  });
  
  it('Creates a story', () => {
    return request.post('/api/stories')
      .send(storyOne)
      .then(({ body }) => {
        assert.ok(body._id);
        idOne = body._id;
      });
  });

  it('Adds a dependence to a story', () => {
    return request.put(`/api/stories/${idOne}/unlocks`)
      .send({ id: idTwo })
      .then(({ body }) => {
        assert.equal(body.unlocks.length, 1);
      });
  });

  it('Updates a story', () => {
    return request.put(`/api/stories/${idOne}`)
      .send({ notes: ['John now has pants.'] })
      .then(({ body }) => {
        assert.equal(body.notes[0], 'John now has pants.');
      });
  });

  it('Marks a story as complete and updates dependencies', () => {
    return request.put(`/api/stories/${idOne}/complete`)
      .then(() => {
        return request.get(`/api/stories/${idTwo}`)
          .then(({ body }) => {
            assert.equal(body.available, true);
          });
      });
  });
});