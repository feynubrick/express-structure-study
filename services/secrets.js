const secretStorage = require('../modules/secret-storage');

const check = async function () {
  console.log('secretStorage.TEST:', secretStorage.TEST);
};

module.exports = {
  check,
};
