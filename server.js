const express = require('express');
require('express-async-errors');
const router = require('./router');
const middlewares = require('./middlewares');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(middlewares.requestLogger);
app.use('/', router);
app.use(middlewares.errorLogger);
app.use(middlewares.errorResponser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
