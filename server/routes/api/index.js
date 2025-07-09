const router = require('express').Router();
const cwuRoutes = require('./cwu-routs');

router.use('/cwu', cwuRoutes);

module.exports = router;