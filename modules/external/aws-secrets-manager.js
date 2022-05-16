const AWS = require('aws-sdk');

class AwsSecretsManager {
  #instance;
  #REGION;

  constructor({ region }) {
    // 환경 변수에 AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY가 제대로 들어있어야 함
    this.#instance = new AWS.SecretsManager({ region });
    this.#REGION = region;
  }

  get instance() {
    return this.#instance;
  }
  get REGION() {
    return this.#REGION;
  }

  getSecret = function ({ secretId }) {
    return new Promise((resolve, reject) => {
      this.instance.getSecretValue({ SecretId: secretId }, function (err, data) {
        let secret = null;
        let decodedBinarySecret = null;

        if (err) {
          reject(err);
        } else {
          // Decrypts secret using the associated KMS CMK.
          // Depending on whether the secret is a string or binary, one of these fields will be populated.
          if ('SecretString' in data) {
            secret = JSON.parse(data.SecretString);
          } else {
            let buff = Buffer.from(data.SecretBinary, 'base64');
            decodedBinarySecret = buff.toString('ascii');
          }
        }

        resolve({ data, secret, decodedBinarySecret });
      });
    });
  };
}

module.exports = {
  AwsSecretsManager,
};
