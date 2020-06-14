const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const coinController = require('../controllers/coinController');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const jsonParser = bodyParser.json();

router.use(expressValidator());

router.post('/', jsonParser, function(req, res) {
  coinController.insertCoin(req, res);
});

module.exports = router;
