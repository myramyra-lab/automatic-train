const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
let api_key = require('./key-store');

module.exports = function (req, res, next) {
    let host = req.headers.origin;
    let api_key = req.header('x-api-key');
    res.status(201)
    next();

    // var err = new Error('Not Found');
    // err.status(404);
    next();
};
