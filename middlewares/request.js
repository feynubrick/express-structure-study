const checker = function (req, res, next) {
  console.log(`REQUEST ${req.method} ${req.originalUrl}`);
  console.log('        query:', req.query);
  console.log('        body:', req.body);
  next();
};

const queryParamParser = function ({ name, type, required = false, defaultVal = undefined }) {
  return function (req, res, next) {
    const value = req.query[name];

    if (req.query === undefined) {
      req.query = {};
    }

    const typeConverter = generateTypeConverter({ type });
    if (typeof value !== 'string') {
      if (required) {
        console.log('required!');
        const error = new Error();
        error.status = 400;
        error.message = 'Required parameters are missing.';
        throw error;
      }
      req.query[name] = defaultVal;
    } else {
      req.query[name] = typeConverter(value);
    }

    next();
  };
};

const generateTypeConverter = function ({ type }) {
  if (type === 'bool') {
    return (val) => Boolean(val);
  }
};

module.exports = {
  checker,
  queryParamParser,
};
