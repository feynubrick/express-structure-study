class SecretStorage {
  #AWS_REGION = process.env.AWS_REGION;
  #AWS_SECRETS_MANAGER_SECRET_NAME = process.env.AWS_SECRETS_MANAGER_SECRET_NAME;
  #TEST;
  #SERVER_PORT;

  get AWS_REGION() {
    return this.#AWS_REGION;
  }
  get AWS_SECRETS_MANAGER_SECRET_NAME() {
    return this.#AWS_SECRETS_MANAGER_SECRET_NAME;
  }
  get TEST() {
    return this.#TEST;
  }
  get SERVER_PORT() {
    return this.#SERVER_PORT;
  }

  updateSecrets({ TEST, SERVER_PORT }) {
    this.#TEST = TEST;
    this.#SERVER_PORT = SERVER_PORT;
  }
}

const secretStorage = new SecretStorage();

module.exports = secretStorage;
