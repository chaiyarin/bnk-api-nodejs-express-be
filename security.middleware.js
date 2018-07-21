var jsonWebToken = require('jsonwebtoken');

module.exports.authentication = function (req, res, next) {
    var token = jsonWebToken.sign({ name: 'Chiayarin' }, 'Beer');
    console.log(token);
    next();
}