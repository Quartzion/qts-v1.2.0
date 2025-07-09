const router = require('express').Router();
const cwuRoutes = require('./cwu-routes');

router.use('/', cwuRoutes);

module.exports = router;