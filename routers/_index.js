const express = require('express');
const router = express.Router();
const healthCheck = require('./health-check');

router.get('/', (req, res) => res.status(200).send('OK'));
router.use('/health-check', healthCheck);

module.exports = router;
