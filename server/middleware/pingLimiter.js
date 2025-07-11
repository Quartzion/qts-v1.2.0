const rateLimit = require('express-rate-limit');

const pingLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(200).json({ message: "🛸 Ping already sent" });
  }

});

module.exports = pingLimiter;
