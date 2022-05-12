class SecretStorage {
  #TEST;

  get TEST() {
    return this.#TEST;
  }

  async loadSecrets({ TEST }) {
    this.#TEST = TEST;
  }
}

const secretStorage = new SecretStorage();

module.exports = secretStorage;
