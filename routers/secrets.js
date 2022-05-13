const { Router } = require('express');
const services = require('../services/_index');
const router = Router();

router.get('/', async (req, res) => {
  console.log('req.query: ', req.query);
  await services.secrets.check();
  res.status(200).send({ success: true });
});

module.exports = router;
