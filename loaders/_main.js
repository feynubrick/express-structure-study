const secrets = require('./secrets');

const init = async function ({ expressApp }) {
  console.log('process.env.DEV: ', process.env.DEV);
  if (process.env.DEV) {
    console.log('\n=== IN DEV ENVIRONMENT ===\n');
    secrets.loadFromDotEnv();
  } else {
    console.log('\n=== IN PRODUCTION ENVIRONMENT ===\n');
    await secrets.loadFromAwsSecretsManager();
  }
};

module.exports = {
  init,
};
