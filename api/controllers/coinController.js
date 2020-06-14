module.exports = {
  insertCoin: insertCoin,
  boxAmount: boxAmount,
  coinsNumber: coinsNumber,
};

var util = require('util');
const winston = require('../helpers/winston');
const CoinModel = require('../../db/models/CoinModel');

function insertCoin(req, res) {
  const body = req.body;
  CoinModel.create(body, function(err, response) {
    if (err) {
      res.status(500);
      res.send(err);
      winston.error(err);
    } else {
      res.status(201);
      res.send(response);
      winston.info(response);
    }
  });
}

function boxAmount(req, res) {
  // Get box amount value from mongo collection

  var message = util.format('AMOUNT: xxx');
  res.json(message);
}

function coinsNumber(req, res) {
  // Get box coins value number from mongo collection
  /*
  {
    "0.01": xxx,
    "0.02": xxx,
    "0.05": xxx,
    "0.10": xxx,
    "0.20": xxx,
    "0.50": xxx,
    "1.00": xxx,
    "2.00": xxx
  }
  */
  var message = util.format('COINS NUMBER: xxx');
  res.json(message);
}
