// eslint-disable-next-line new-cap
const winston = require('../helpers/winston');
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
// eslint-disable-next-line no-unused-vars
let dotenv = require('dotenv').config();

function createToken(controller, res) {
  const controllerObject = {
    controller: controller,
  };
  const token = jwt.sign(controllerObject, process.env.TOKEN_PW);
  res.json({
    token: token,
  });
}

function checkToken(req) {
  const token = req.headers["token"];
  return new Promise(function(resolve) {
    // Decode token
    if (token) {
      // Verifies secret and checks exp
      jwt.verify(token, process.env.TOKEN_PW, function(err) {
        if (err) {
          winston.error("Failed to authenticate token");
          resolve(false);
        } else {
          // If everything is good, save to request for use in other routes
          const decoded = jwt.decode(token, {
            complete: true,
          });
          req.decoded = decoded;
          resolve(true);
        }
      });
    } else {
      // If there is no token return an error
      winston.error("No token provided");
      resolve(false);
    }
  });
}

module.exports = {
  createToken: createToken,
  checkToken: checkToken,
};
