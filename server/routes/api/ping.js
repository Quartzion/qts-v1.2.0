// routes/api/ping.js
const router = require('express').Router();
const pingLimiter = require('../../middleware/pingLimiter');

const status = 'warm'

router.get('/ping', pingLimiter, (req, res) => {
  res.json({
    status: status,
    message: `API is ${status}`,
    serverTime: new Date().toISOString(),
    uptime: process.uptime()
  });
});

module.exports = router;