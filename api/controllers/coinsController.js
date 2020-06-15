module.exports = {
  insertCoin: insertCoin,
  boxAmount: boxAmount,
  numberOfCoin: numberOfCoin,
  numberOfCoins: numberOfCoins,
};

var util = require('util');
const winston = require('../helpers/winston');
const CoinsModel = require('../../db/models/CoinsModel');

/**
  Insert the coin value in the CoinModel collection
**/
function insertCoin(req, res) {
  const body = req.body;
  CoinsModel.create(body, function(err, response) {
    if (err) {
      res.status(500).send(err);
      winston.error(err);
    } else {
      res.status(201).send(response);
      winston.info(response);
    }
  });
}

function boxAmount(req, res) {
  // Get box amount value from mongo collection

  var message = util.format('AMOUNT: xxx');
  res.json(message);
}

/**
  Return the number of coins with specific value
**/
function numberOfCoin(req, res) {
  CoinsModel.countDocuments({
    coinValue: req.query.value,
  }, function(err, number) {
    if (err) {
      res.status(500).send(err);
      winston.error(err);
    } else {
      res.status(200).send(number.toString());
      winston.info(number);
    }
  });
}

function numberOfCoins(req, res) {
  CoinsModel.countDocuments({}, function(err, number) {
    if (err) {
      res.status(500).send(err);
      winston.error(err);
    } else {
      res.status(200).send(number.toString());
      winston.info(number);
    }
  });
}
