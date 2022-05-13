class SecretStorage {
  #MINDLOGIC_DB_PASSWORD;

  get MINDLOGIC_DB_PASSWORD() {
    return this.#MINDLOGIC_DB_PASSWORD;
  }

  async updateSecrets({ MINDLOGIC_DB_PASSWORD }) {
    this.#MINDLOGIC_DB_PASSWORD = MINDLOGIC_DB_PASSWORD;
  }
}

const secretStorage = new SecretStorage();

module.exports = secretStorage;
