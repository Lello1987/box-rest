let mongoose = require('mongoose');
let winston = require('../../api/helpers/winston');

let ControllerModelSchema = new mongoose.Schema({
  controller: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

let controllerModel = mongoose.model("ControllerModel", ControllerModelSchema, "ControllerModel");

winston.info("Controller model schema created");

module.exports = controllerModel;
