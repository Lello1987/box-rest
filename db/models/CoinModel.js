let mongoose = require('mongoose');
let winston = require('../../api/helpers/winston');

let CoinModelSchema = new mongoose.Schema({
  coinValue: {
    type: Number,
    enum: [0.01, 0.02, 0.05, 0.10, 0.20, 0.50, 1.00, 2.00],
    required: true,
  },
  coinCurrency: {
    type: String,
    enum: ["dollar", "euro"],
    required: true,
  },
  coinTime: {
    type: Date,
    required: true,
  },
  boxId: {
    type: String,
    required: true,
  }
});

let coinModel = mongoose.model("CoinModel", CoinModelSchema, "CoinModel");

winston.info("Coin model schema created");

module.exports = coinModel;
