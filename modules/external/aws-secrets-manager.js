/**
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

// ABOUT THIS NODE.JS SAMPLE: This sample is part of the AWS Secrets Manager.
// In this sample we only handle the specific exceptions for the 'GetSecretValue' API.
// If you need more information about configurations or implementing the sample code, visit the AWS docs:
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-nodejs.html

// Load the AWS SDK
const AWS = require('aws-sdk');
const REGION = 'ap-northeast-2';
const SECRET_NAME = 'arn:aws:secretsmanager:ap-northeast-2:<YOUR_ACCOUNT_ID>:secret:<SECRET_NAME>';

// Create a Secrets Manager client
// AWS는 환경변수에 있는 AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY를 사용해서
const secretsManager = new AWS.SecretsManager({ region: REGION });

// In this sample we only handle the specific exceptions for the 'GetSecretValue' API.
// See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
// We rethrow the exception by default.

const getSecret = function ({ name = SECRET_NAME } = {}) {
  return new Promise((resolve, reject) => {
    secretsManager.getSecretValue({ SecretId: name }, function (err, data) {
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

      // Your code goes here.
      resolve({ data, secret, decodedBinarySecret });
    });
  });
};

module.exports = {
  getSecret,
};
