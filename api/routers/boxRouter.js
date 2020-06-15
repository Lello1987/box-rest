let express = require('express');
let expressValidator = require('express-validator');
// eslint-disable-next-line new-cap
let router = express.Router();
let bodyParser = require('body-parser');
let boxController = require('../controllers/boxController');
let jsonParser = bodyParser.json();

router.use(expressValidator());

router.post('/', jsonParser, function(req, res) {
  boxController.createBox(req, res);
});

router.delete('/', jsonParser, function(req, res) {
  boxController.deleteBox(req, res);
});

router.post('/coin', jsonParser, function(req, res) {
  boxController.insertCoin(req, res);
});

router.get('/coin', jsonParser, function(req, res) {
  boxController.boxCoin(req, res);
});

router.get('/coins', jsonParser, function(req, res) {
  boxController.boxCoins(req, res);
});

router.get('/amount', jsonParser, function(req, res) {
  boxController.boxAmount(req, res);
});

module.exports = router;
