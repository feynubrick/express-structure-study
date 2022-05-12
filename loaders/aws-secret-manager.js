const secret = require('../modules/secret');

const loadSecrets = async function ({ expressApp }) {
  await secret.loadSecrets({ TEST: 'TEST_VALUE' });
};

module.exports = {
  loadSecrets,
};
