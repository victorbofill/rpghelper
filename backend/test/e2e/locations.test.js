// const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe.only('Profile API', () => {
  before(() => dropCollection('locations'));
  before(() => dropCollection('stories'));

  it('Creates a locations', () => {
    return request.post('/api/locations')
      .then(({ body }) => {
        console.log('body: ', body);
      });
  });
});