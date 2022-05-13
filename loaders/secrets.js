const secretStorage = require('../modules/secret-storage');
const modules = require('../modules/_index');

const loadFromDotEnv = async function () {
  await secretStorage.updateSecrets(process.env);
};

const loadFromAwsSecretsManager = async function () {
  const { secret } = await modules.external.awsSecretsManager.getSecret();
  await secretStorage.updateSecrets(secret);
};

module.exports = {
  loadFromDotEnv,
  loadFromAwsSecretsManager,
};
