'use strict';
// eslint-disable-next-line no-unused-vars
let dotenv = require('dotenv').config();
let cors = require('cors');
let mongoose = require('mongoose');
let express = require('express');
let dbConfig = require('./db/dbConfig');
let winston = require('./api/helpers/winston');
let app = express();

// Routers
let boxRouter = require('./api/routers/boxRouter');

module.exports = app;

app.use(cors());
app.use('/box', boxRouter);

let port = process.env.SERVER_PORT;
let server = app.listen(port);
server.timeout = 600000;
winston.info('Listening on port ' + port);

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: dbConfig.user,
  pass: dbConfig.pwd
}).then(() => {
  winston.info('Successfully connected to the database');
}).catch(err => {
  winston.info('Error connecting to the database');
  process.exit();
});
