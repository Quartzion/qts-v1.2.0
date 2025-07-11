// routes/api/ping.js
const router = require('express').Router();

const status = 'warm'

router.get('/ping', (req, res) => {
  res.json({
    status: status,
    message: `API is ${status}`,
    serverTime: new Date().toISOString(),
    uptime: process.uptime()
  });
});

module.exports = router;