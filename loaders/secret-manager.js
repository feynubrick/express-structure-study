const secretStorage = require('../modules/secret-storage');

const loadSecrets = async function ({ expressApp }) {
  if (process.env.DEV) {
    await secretStorage.loadSecrets({ TEST: process.env.TEST });
  } else {
    await secretStorage.loadSecrets({ TEST: process.env.TEST });
  }
};

module.exports = {
  loadSecrets,
};
