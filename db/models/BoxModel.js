let mongoose = require('mongoose');
let winston = require('../../api/helpers/winston');

let BoxModelSchema = new mongoose.Schema({
  boxId: {
    type: String,
    required: true,
  },
  boxAmount: {
    type: Number,
    required: true,
  },
  boxCurrency: {
    type: String,
    enum: ['dollar', 'euro'],
    required: true,
  },
  boxStatus: {
    type: Boolean, // false(OFF) true(ON)
    required: true,
  },
  boxLastUpdate: {
    type: Date,
    required: true,
  },
  boxPowerOn: {
    type: Date,
    required: false,
  },
  boxPowerOff: {
    type: Date,
    required: false,
  },
});

let boxModel = mongoose.model("BoxModel", BoxModelSchema, "BoxModel");

winston.info("Box model schema created");

module.exports = boxModel;
