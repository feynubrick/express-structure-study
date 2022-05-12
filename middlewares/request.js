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
    return booleanConverter;
  }
  return (text) => text;
};

const booleanConverter = function (text) {
  const truthyValues = ['1', 'true'];
  const falseyValues = ['0', 'false'];
  const loweredText = text.toLowerCase();

  if (truthyValues.includes(loweredText)) {
    return true;
  } else if (falseyValues.includes(loweredText)) {
    return false;
  }
  const error = new Error();
  error.status = 400;
  error.message = 'Wrong query parameter value.';
  throw error;
};

module.exports = {
  checker,
  queryParamParser,
};
