const winston = require('../helpers/winston');
const jsonwebtoken = require('../helpers/jsonwebtoken');

function validateToken(req, res, callback) {
  jsonwebtoken.checkToken(req).then(function(result) {
    if (result) {
      callback(true);
    } else {
      res.status(401).send("Unauthorized, failed to authenticate token");
 }
  });
}

module.exports = {
  validateToken: validateToken,
};
