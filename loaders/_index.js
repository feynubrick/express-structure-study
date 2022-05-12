const awsSecretManager = require('./aws-secret-manager');

const initLoaders = async function ({ expressApp }) {
  await awsSecretManager.loadSecrets({ expressApp });
};

module.exports = initLoaders;
