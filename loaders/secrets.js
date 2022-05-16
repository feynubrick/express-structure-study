const { AwsSecretsManager } = require('../modules/external/aws-secrets-manager');
const secretStorage = require('../modules/secret-storage');

const loadFromDotEnv = function () {
  secretStorage.updateSecrets(process.env);
};

const loadFromAwsSecretsManager = async function () {
  const manager = new AwsSecretsManager({ region: secretStorage.AWS_REGION });
  const { secret } = await manager.getSecret({ secretId: secretStorage.AWS_SECRETS_MANAGER_SECRET_NAME });
  secretStorage.updateSecrets(secret);
};

module.exports = {
  loadFromDotEnv,
  loadFromAwsSecretsManager,
};
