module.exports = {
  insertCoin: insertCoin,
  boxAmount: boxAmount,
  numberOfCoin: numberOfCoin,
  numberOfCoins: numberOfCoins,
};

let util = require('util');
let winston = require('../helpers/winston');
let CoinsModel = require('../../db/models/CoinsModel');

/**
  Insert the coin value in the CoinModel collection
**/
function insertCoin(req, res) {
  let body = req.body;
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

  let message = util.format('AMOUNT: xxx');
  res.json(message);
}

/**
  Return the number of coins in the box with specific value
**/
function numberOfCoin(req, res) {
  CoinsModel.countDocuments({
    coinValue: req.query.coinValue,
    boxId:req.query.boxId,
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

/**
  Return the number of coins in the box
**/
function numberOfCoins(req, res) {
  CoinsModel.countDocuments({
    boxId:req.query.boxId,
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
