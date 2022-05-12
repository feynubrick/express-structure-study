const secret = require('../modules/secret');

const loadSecrets = async function ({ expressApp }) {
  await secret.loadSecrets({ TEST: process.env.TEST });
};

module.exports = {
  loadSecrets,
};
