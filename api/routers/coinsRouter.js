let express = require('express');
// eslint-disable-next-line new-cap
let router = express.Router();
let coinsController = require('../controllers/coinsController');
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');
let jsonParser = bodyParser.json();

router.use(expressValidator());

router.post('/', jsonParser, function(req, res) {
  coinsController.insertCoin(req, res);
});

router.get('/number', jsonParser, function(req, res) {
  if (req.query.coinValue)
    coinsController.numberOfCoin(req, res);
  else
    coinsController.numberOfCoins(req, res);
});

module.exports = router;
