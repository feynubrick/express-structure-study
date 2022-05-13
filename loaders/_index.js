const secretManager = require('./secret-manager');

const initLoaders = async function ({ expressApp }) {
  console.log('process.env.DEV: ', process.env.DEV);
  if (process.env.DEV) {
    await secretManager.loadSecretsFromDotEnv({ expressApp });
  } else {
    await secretManager.loadSecretsFromAwsSecretsManager({ expressApp });
  }
};

module.exports = initLoaders;
