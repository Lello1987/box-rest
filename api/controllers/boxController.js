module.exports = {
  createBox: createBox,
  deleteBox: deleteBox,
  insertCoin: insertCoin,
  boxAmount: boxAmount,
  boxCoin: boxCoin,
  boxCoins: boxCoins,
};

let util = require('util');
let winston = require('../helpers/winston');
let BoxModel = require('../../db/models/BoxModel');
let CoinModel = require('../../db/models/CoinModel');

/**
  Create a new coins box
**/
function createBox(req, res) {
  let body = req.body;
  BoxModel.create(body, function(err, box) {
    if (err) {
      res.status(500).send(err);
      winston.error(err);
    } else {
      res.status(201).send(box);
      winston.info(box);
    }
  });
}

/**
  Delete a coins box
**/
function deleteBox(req, res) {
  BoxModel.deleteOne({ boxId: req.query.boxId}, function(err, box) {
    if (err) {
      res.status(500).send(err);
      winston.error(err);
    } else {
      res.status(200).send("Box " + req.query.boxId + " deleted");
      winston.info("Box " + req.query.boxId + " deleted");
    }
  });
}

/**
  Insert the coin value in the CoinModel collection
**/
function insertCoin(req, res) {
  let body = req.body;
  CoinModel.create(body, function(err, response) {
    if (err) {
      res.status(500).send(err);
      winston.error(err);
    } else {
      // Update box amount
      let update = {
        useFindAndModify: false,
        boxLastUpdate: req.body.coinTime,
      };
      BoxModel.findOneAndUpdate({ boxId: req.body.boxId }, { $inc: { boxAmount: req.body.coinValue } }, update, function(err) {
        if (err)
          winston.error(err);
        else {
          res.status(201).send(response);
          winston.info(response);
          winston.info("Box " + req.body.boxId + " amount updated");
        }
      });
    }
  });
}

/**
  Return the box amount
**/
function boxAmount(req, res) {
  BoxModel.findOne({ boxId: req.query.boxId}, function(err, box) {
    if (err) {
      res.status(500).send(err);
      winston.error(err);
    } else {
      res.status(200).send(box.boxAmount.toString());
      winston.info(box.boxAmount.toString());
    }
  });
}

/**
  Return the number of coins in the box with specific value
**/
function boxCoin(req, res) {
  CoinModel.countDocuments({
    coinValue: req.query.coinValue,
    boxId:req.query.boxId,
  }, function(err, number) {
    if (err) {
      res.status(500).send(err);
      winston.error(err);
    } else {
      res.status(200).send(number.toString());
      winston.info(number.toString());
    }
  });
}

/**
  Return the number of coins in the box
**/
function boxCoins(req, res) {
  CoinModel.countDocuments({
    boxId:req.query.boxId,
  }, function(err, number) {
    if (err) {
      res.status(500).send(err);
      winston.error(err);
    } else {
      res.status(200).send(number.toString());
      winston.info(number.toString());
    }
  });
}
