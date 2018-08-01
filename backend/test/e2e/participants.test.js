const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe.only('Profile API', () => {
  before(() => dropCollection('participants'));
  before(() => dropCollection('participantlists'));

  let listId = null;
  let participantId = null;

  it('Creates participants list', () => {
    return request.post('/api/participants/')
      .then(({ body }) => {
        assert.ok(body.id);
        listId = body.id;
        assert.deepEqual(body.participants, []);
      });
  });

  it('Creates a participant', () => {
    return request.post(`/api/participants/${listId}`)
      .then(({ body }) => {
        assert.ok(body.id);
        assert.equal(body.participants.length, 1);
      });
  });

  it('Retrieves the participants', () => {
    return request.get('/api/participants/')
      .then(({ body }) => {
        assert.ok(body.id);
        assert.equal(body.participants.length, 1);
        participantId = body.participants[0]._id;
      });
  });

  it('Updates participants', () => {
    return request.put(`/api/participants/${listId}/participant/${participantId}`)
      .send({ unconscious: true })
      .then(({ body }) => {
        assert.ok(body.id);
        assert.equal(body.participants.length, 1);
      });
  });

  it('Deletes participant', () => {
    return request.delete(`/api/participants/${listId}/participant/${participantId}`)
      .then(({ body }) => {
        assert.ok(body.id);
        assert.equal(body.participants.length, 0);
      });
  });

  it('Deletes participants list', () => {
    return request.delete(`/api/participants/${listId}`)
      .then(({ body }) => {
        assert.deepEqual(body, {});
      });
  });
});