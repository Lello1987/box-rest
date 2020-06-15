'use strict';
// eslint-disable-next-line no-unused-vars
let dotenv = require('dotenv').config();
let mongoose = require('mongoose');
let cors = require('cors');
let express = require('express');
let dbConfig = require('./db/dbConfig');
let winston = require('./api/helpers/winston');
let app = express();

// Routers
let coinsRouter = require('./api/routers/coinsRouter');

module.exports = app;

app.use(cors());
app.use('/coins', coinsRouter);

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
