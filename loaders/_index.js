const secretManager = require('./secret-manager');

const initLoaders = async function ({ expressApp }) {
  await secretManager.loadSecrets({ expressApp });
};

module.exports = initLoaders;
