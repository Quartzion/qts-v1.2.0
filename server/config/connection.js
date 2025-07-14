const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true
});

module.exports = mongoose.connection;