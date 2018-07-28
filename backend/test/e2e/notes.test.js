const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe('Profile API', () => {
  before(() => dropCollection('notes'));

  let id = null;

  it('Creates a note', () => {
    return request.post('/api/notes')
      .send({ note: 'This is a note.'})
      .then(({ body }) => {
        assert.ok(body._id);
        id = body._id;
      });
  });

  it('Retrieves the notes', () => {
    return request.get('/api/notes')
      .then(({ body }) => {
        assert.equal(body.length, 1);
        assert.equal(body[0].note, 'This is a note.');
      });
  });

  it('Updates a note', () => {
    return request.put(`/api/notes/${id}`)
      .send({ note: 'This is an updated entry.' })
      .then(({ body }) => {
        assert.notEqual(body.entry, 'This is a a note.');
      });
  });

  it('Deletes a note', () => {
    return request.delete(`/api/notes/${id}`)
      .then(({ body }) => {
        assert.ok(body.deleted);
      });
  });
});