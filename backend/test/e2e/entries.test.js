const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe.skip('Profile API', () => {
  before(() => dropCollection('entries'));

  let id = null;

  it('Creates an entry', () => {
    return request.post('/api/entries')
      .send({ entry: 'This is an entry.'})
      .then(({ body }) => {
        assert.ok(body._id);
        id = body._id;
      });
  });

  it('Creates an entry', () => {
    return request.post('/api/entries')
      .send({ entry: 'This is another entry.'})
      .then(({ body }) => {
        assert.ok(body._id);
      });
  });

  it('Retrieves the entries', () => {
    return request.get('/api/entries')
      .then(({ body }) => {
        assert.equal(body.length, 2);
        assert.equal(body[0].entry, 'This is an entry.');
      });
  });

  it('Updates an entry', () => {
    return request.put(`/api/entries/${id}`)
      .send({ entry: 'This is an updated entry.' })
      .then(({ body }) => {
        assert.notEqual(body.entry, 'This is an entry.');
      });
  });

  it('Deletes an entry', () => {
    return request.delete(`/api/entries/${id}`)
      .then(({ body }) => {
        assert.ok(body.deleted);
      });
  });
});