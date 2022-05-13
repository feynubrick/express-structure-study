class SecretStorage {
  #TEST;
  #SERVER_PORT;

  get TEST() {
    return this.#TEST;
  }
  get SERVER_PORT() {
    return this.#SERVER_PORT;
  }

  async updateSecrets({ TEST, SERVER_PORT }) {
    this.#TEST = TEST;
    this.#SERVER_PORT = SERVER_PORT;
  }
}

const secretStorage = new SecretStorage();

module.exports = secretStorage;
