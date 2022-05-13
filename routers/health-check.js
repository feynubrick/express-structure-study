const { Router } = require('express');
const httpStatusCode = require('../constants/http-status-code');

const router = Router();
const { queryParamParser } = require('../middlewares/request');

const queryParam = {
  error: queryParamParser({ name: 'error', type: 'bool', required: true }),
};

router.get('/', [queryParam.error], (req, res) => {
  console.log('req.query: ', req.query);
  res.status(httpStatusCode.OK_200).send({ success: true });
});

module.exports = router;
