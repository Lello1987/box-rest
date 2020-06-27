let express = require('express');
let expressValidator = require('express-validator');
// eslint-disable-next-line new-cap
let router = express.Router();
let bodyParser = require('body-parser');
let boxController = require('../controllers/boxController');
const validation = require('../helpers/validation');
let jsonParser = bodyParser.json();

router.use(expressValidator());

router.post('/', jsonParser, function(req, res) {
  boxController.createBox(req, res);
});

router.get('/', jsonParser, function(req, res) {
  if (req.query.boxId == "all")
    boxController.getBoxes(req, res);
  else
    boxController.getBox(req, res);
});

router.delete('/', jsonParser, function(req, res) {
  boxController.deleteBox(req, res);
});

router.patch('/', jsonParser, function(req, res) {
  boxController.updateBox(req, res);
});

router.post('/coin', jsonParser, function(req, res) {
  boxController.insertCoin(req, res);
});

router.get('/coin', jsonParser, function(req, res) {
  boxController.boxCoin(req, res);
});

router.get('/coins', jsonParser, function(req, res) {
  validation.validateToken(req, res, function(result) {
    if (result)
      boxController.boxCoins(req, res);
  });
});

router.get('/amount', jsonParser, function(req, res) {
  boxController.boxAmount(req, res);
});

module.exports = router;
