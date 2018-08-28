const config = require('../config');
const mongoose = require('mongoose');

mongoose.connect(config.databaseUrl, { useNewUrlParser: true })
  .then(response => console.log('response', response))
  .catch(error => console.log('error', error));
