'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var dotenv = require('dotenv').config();
var winston = require('./api/helpers/winston');

// Mongo Database
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Database Name
const dbName = 'box';

const url = 'mongodb://' + process.env.MONGO_HOST + ':' + process.env.MONGO_PORT + '/' + dbName;

const options = {
  useUnifiedTopology: true,
  keepAlive: 6000000,
  connectTimeoutMS: 600000,
};

// Use connect method to connect to the server
MongoClient.connect(url, options, function(err, client) {
  assert.equal(null, err);
  winston.info("Connected successfully to server");

  //const db = client.db(dbName);

  client.close();
});

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 3000;
  app.listen(port);

  winston.info('Listening on port ' + port);
});
