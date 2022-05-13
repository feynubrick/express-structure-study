const secretStorage = require('../../modules/secret-storage');

const check = async function () {
  console.log('secretStorage.MINDLOGIC_DB_PASSWORD:', secretStorage.MINDLOGIC_DB_PASSWORD);
};

module.exports = check;
