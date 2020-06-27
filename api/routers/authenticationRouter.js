const express = require('express');
const expressValidator = require('express-validator');
// eslint-disable-next-line new-cap
const router = express.Router();
const bodyParser = require('body-parser');
const authentication = require('../controllers/authentication');
const winston = require('../helpers/winston');
const jsonParser = bodyParser.json();

router.use(expressValidator());

router.post('/', jsonParser, function(req, res) {
  if (req.body.controller && req.body.password)
    authentication.auth(req, res);
  else {
    res.status(400).send("Authentication failed");
    winston.error("Authentication failed");
  }
});

module.exports = router;
