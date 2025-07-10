// routes/api/ping.js
router.get('/ping', (req, res) => {
  res.json({
    status: 'warm',
    serverTime: new Date().toISOString(),
    uptime: process.uptime()
  });
});
