const secretStorage = require('../modules/secret-storage');
const awsSecretsManager = require('../modules/external/aws-secrets-manager');

const loadFromDotEnv = async function () {
  await secretStorage.updateSecrets(process.env);
};

const loadFromAwsSecretsManager = async function () {
  const { secret } = await awsSecretsManager.getSecret();
  await secretStorage.updateSecrets(secret);
};

module.exports = {
  loadFromDotEnv,
  loadFromAwsSecretsManager,
};
