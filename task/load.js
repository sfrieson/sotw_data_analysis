const config = require('../config');
const csv = require('csvtojson');
const fs = require('fs');
const path = require('path');

console.log('This task will load the data into the database.');

csv({ flatKeys: true })
  .fromStream(fs.createReadStream(path.resolve(__dirname, '../data/State+Of+The+Web+Survey+Results.csv')))
  .subscribe((json) => {
    return new Promise((resolve, reject) => {
      console.log(json);
      resolve();
    });
  });
