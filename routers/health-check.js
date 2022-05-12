const { Router } = require('express');

const router = Router();
const { queryParamParser } = require('../middlewares/request');

const queryParam = {
  error: queryParamParser({ name: 'error', type: 'bool', required: true }),
};

router.get('/', [queryParam.error], (req, res) => {
  console.log('req.query: ', req.query);
  res.status(200).send({ success: true });
});

module.exports = router;
