'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var dotenv = require('dotenv').config();
var winston = require('./api/helpers/winston');

// Mongo Database
const dbMongo = require('./db/dbNativeMongo');

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

// Connect to Mongo on start
dbMongo.connect('mongodb://' + process.env.MONGO_USER +
  ':' + process.env.MONGO_PASSWORD + '@' + process.env.MONGO_HOST + ':' +
  process.env.MONGO_PORT + '/' + process.env.MONGO_DB + '?authSource=admin',
  function(err) {
    if (err) {
      winston.error('500 - Unable to connect to MongoDB');
      process.exit(1);
    } else {
      const dbmPort = process.env.DBMONGO_PORT;
      app.listen(dbmPort, function() {
        winston.info('Native MongoDB listening on port ' + dbmPort);
      });
    }
});

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 3000;
  app.listen(port);

  winston.info('Listening on port ' + port);
});
