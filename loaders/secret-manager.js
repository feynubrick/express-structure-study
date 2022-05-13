const secretStorage = require('../modules/secret-storage');
const awsSecretsManager = require('../modules/external/aws-secrets-manager');

const loadSecretsFromDotEnv = async function ({ expressApp }) {
  await secretStorage.updateSecrets(process.env);
};

const loadSecretsFromAwsSecretsManager = async function ({ expressApp }) {
  const { secret } = await awsSecretsManager.getSecret();
  await secretStorage.updateSecrets(secret);
};

module.exports = {
  loadSecretsFromDotEnv,
  loadSecretsFromAwsSecretsManager,
};
