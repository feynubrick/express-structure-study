class SecretStorage {
  #TEST;

  get TEST() {
    return this.#TEST;
  }

  async updateSecrets({ TEST }) {
    this.#TEST = TEST;
  }
}

const secretStorage = new SecretStorage();

module.exports = secretStorage;
