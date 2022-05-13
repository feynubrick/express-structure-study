const { Router } = require('express');
const services = require('../services/_index');
const router = Router();
const httpStatusCode = require('../constants/http-status-code');

router.get('/', async (req, res) => {
  console.log('req.query: ', req.query);
  await services.secrets.check();
  res.status(httpStatusCode.OK_200).send({ success: true });
});

module.exports = router;
