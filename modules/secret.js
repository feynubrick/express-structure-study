class SecretManager {
  #TEST;

  constructor() {
    this.#TEST = 'TEST_DEFAULT_VALUE';
  }

  get TEST() {
    return this.#TEST;
  }

  async loadSecrets({ TEST }) {
    this.#TEST = TEST;
  }
}

const secret = new SecretManager();

module.exports = secret;
