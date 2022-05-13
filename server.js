if (process.env.DEV) {
  require('dotenv').config();
}

const express = require('express');
require('express-async-errors');
const router = require('./routers/_index');
const middlewares = require('./middlewares/_index');
const loaders = require('./loaders/_index');
const modules = require('./modules/_index');

const startServer = async function () {
  const app = express();

  await loaders.main.init({ expressApp: app });
  const port = modules.secretStorage.SERVER_PORT;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(middlewares.log.requestLogger);
  app.use(middlewares.request.checker);
  app.use('/', router);
  app.use(middlewares.error.responseHandler);

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
};

startServer();
