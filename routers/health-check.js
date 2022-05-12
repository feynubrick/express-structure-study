const { Router } = require('express');
const controllers = require('../controllers/_index');

const router = Router();
const { queryParamParser } = require('../middlewares/request');

const queryParam = {
  error: queryParamParser({ name: 'error', type: 'bool', required: true }),
};

router.get('/', [queryParam.error], controllers.healthCheck.main);

module.exports = router;
