let MongoClient = require('mongodb').MongoClient;
var winston = require('../api/helpers/winston');
const assert = require('assert');

exports.connect = function(url, done) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    winston.info("Connected successfully to server");
    const db = client.db(dbName);
    done();
  });
};

exports.get = function() {
  return state.db;
};

exports.close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null;
      state.mode = null;
      done(err);
    });
  }
};
