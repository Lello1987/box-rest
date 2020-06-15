const mongoose = require('mongoose');
const winston = require('../../api/helpers/winston');

const CoinsModelSchema = new mongoose.Schema({
  coinValue: {
    type: Number,
    enum: [0.01, 0.02, 0.05, 0.10, 0.20, 0.50, 1.00, 2.00],
    required: true,
  },
  coinCurrency: {
    type: String,
    enum: ['dollar', 'euro'],
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

const coinsModel = mongoose.model('CoinsModel', CoinsModelSchema, 'CoinsModel');

winston.info('Coins model schema created');

module.exports = coinsModel;
