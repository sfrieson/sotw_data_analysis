const config = require('../config');
const mongoose = require('mongoose');

mongoose.connect(config.databaseUrl, { useNewUrlParser: true })
  .catch(error => console.log('error', error));
