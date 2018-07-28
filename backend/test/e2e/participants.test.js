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
        assert.ok(body._id);
        listId = body._id;
      });
  });

  it('Creates a participant', () => {
    return request.post(`/api/participants/${listId}`)
      .then(({ body }) => {
        assert.equal(body[0].participants.length, 1);
        participantId = body[0].participants[0]._id;
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
        assert.equal(body[0].participants.length, 1);
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