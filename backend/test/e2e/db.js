const connect = require('../../lib/connect');
const mongoose = require('mongoose');

before(() => connect('mongodb://localhost:27019/rpg_test'));
after(() => mongoose.connection.close());

module.exports = {
  dropCollection(name) {
    const collection = mongoose.connection.collections[name];
    return collection.drop()
      .catch(err => {
        if(err.codeName !== 'NamespaceNotFound') throw err;
      });
  }
};