const express = require('express');
const router = express.Router();
const healthCheck = require('./health-check');
const secrets = require('./secrets');

router.get('/', (req, res) => res.status(200).send('OK'));
router.use('/health-check', healthCheck);
router.use('/secrets', secrets);

module.exports = router;
