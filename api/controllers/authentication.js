module.exports = {
  auth: auth,
};

let util = require('util');
const winston = require('../helpers/winston');
const jsonwebtoken = require('../helpers/jsonwebtoken');

let ControllerModel = require('../../db/models/ControllerModel');

function auth(req, res) {
  const controller = req.body.controller;
  const password = req.body.password;
  ControllerModel.find({ controller: controller }, function(err, elem) {
    if (err) {
      res.status(500).send(err);
      winston.error(err);
    } else {
      if ( (elem.length > 0) && (elem[0].password == password) ) {
        jsonwebtoken.createToken(controller, res);
      } else {
        res.status(500).send("Controller not found");
        winston.error("Controller not found");
      }
    }
  });
}
