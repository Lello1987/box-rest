'use strict';

var util = require('util');

module.exports = {
  coin: coin
};

function coin_insert(req, res) {
  var coin_value = req.swagger.params.name.coin_value || 'null';

  // Insert coin value inside mongo collection

  var message = util.format('COIN: ', coin_value);

  res.json(message);
}

function box_amount(req, res) {
  // Get box amount value from mongo collection

  var message = util.format('AMOUNT: xxx');
  res.json(message);
}

function coins_number(req, res) {
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
