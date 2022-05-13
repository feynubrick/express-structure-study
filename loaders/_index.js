const secrets = require('./secrets');

const init = async function ({ expressApp }) {
  console.log('process.env.DEV: ', process.env.DEV);
  if (process.env.DEV) {
    await secrets.loadFromDotEnv();
  } else {
    await secrets.loadFromAwsSecretsManager();
  }
};

module.exports = {
  init,
};
