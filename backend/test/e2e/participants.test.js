const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe.only('Profile API', () => {
  before(() => dropCollection('participants'));

  let listId = null;
  let participantId = null;

  it('Creates participants list', () => {
    return request.post('/api/participants/')
      .then(({ body }) => {
        assert.ok(body._id);
        listId = body._id;
      });
  });

  it('Creates a participant', () => {
    return request.post(`/api/participants/${listId}`)
      .then(({ body }) => {
        participantId = body.participants[0];
        assert.notEqual(body.participants.length, 0);
      });
  });

  it('Retrieves the participants', () => {
    return request.get('/api/participants')
      .then(({ body }) => {
        assert.equal(body[0].participants.length, 1);
      });
  });

  it('Updates participants', () => {
    return request.put(`/api/participants/${participantId}`)
      .send({ unconscious: true })
      .then(({ body }) => {
        assert.equal(body.unconscious, true);
      });
  });

  it('Deletes participant', () => {
    return request.delete(`/api/participants/${participantId}`)
      .then(({ body }) => {
        assert.ok(body.deleted);
      });
  });

  it('Deletes participants list', () => {
    return request.delete('/api/participants')
      .then(({ body }) => {
        assert.ok(body.deleted);
      });
  });
});