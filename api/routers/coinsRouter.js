const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const coinsController = require('../controllers/coinsController');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const jsonParser = bodyParser.json();

router.use(expressValidator());

router.post('/', jsonParser, function(req, res) {
  coinsController.insertCoin(req, res);
});

router.get('/number', jsonParser, function(req, res) {
  if (req.query.value)
    coinsController.numberOfCoin(req, res);
  else
    coinsController.numberOfCoins(req, res);
});

module.exports = router;
