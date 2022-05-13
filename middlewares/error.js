const httpStatusCode = require('../constants/http-status-code');

const responseHandler = (err, req, res, next) => {
  res.status(err.status || httpStatusCode.INTERNAL_SERVER_ERROR_500).send({ message: err.message });
};

module.exports = {
  responseHandler,
};
