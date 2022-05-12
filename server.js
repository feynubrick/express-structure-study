if (process.env.DEV) {
  require('dotenv').config();
}

const express = require('express');
require('express-async-errors');
const router = require('./routers/_index');
const middlewares = require('./middlewares/_index');
const initLoaders = require('./loaders/_index');
const modules = require('./modules/_index');

const startServer = async function ({ port }) {
  const app = express();

  console.log('process.env.DEV: ', process.env.DEV);

  console.log('secret: ', modules.secretStorage.TEST);
  await initLoaders({ expressApp: app });
  console.log('secret: ', modules.secretStorage.TEST);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(middlewares.request.checker);
  app.use('/', router);
  app.use(middlewares.log.requestLogger);
  app.use(middlewares.error.responseHandler);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

startServer({ port: 3000 });
