const requestLogger = (err, req, res, next) => {
  console.log('REQ path:', req.path);
  console.log('REQ method:', req.method);
  console.log('REQ query:', req.query);
  console.error('err.stack', err.stack);
  next(err);
};

module.exports = {
  requestLogger,
};
