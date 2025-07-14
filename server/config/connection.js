const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOURI || 'mongodb://127.0.0.1:27017/QuartzionDb' );

module.exports = mongoose.connection;