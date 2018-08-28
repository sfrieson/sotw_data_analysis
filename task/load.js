const config = require('../config');
const csv = require('csvtojson');
const fs = require('fs');
const path = require('path');

console.log('This task will load the data into the database.');

csv({ flatKeys: true })
  .fromStream(fs.createReadStream(path.resolve(__dirname, '..', config.dataFileName)))
  .subscribe(json => loadIntoDB(cleanData(json)));

const normalNumber = /^(\d{1,2})\. /
const multiNumber = /^(\d{1,2})\.\w/

function cleanData (json) {
  const row = {}

  Object.keys(json).forEach(function(key) {
    if (key.match(normalNumber)) {
      const questionNumber = key.match(normalNumber)[1];
      row[config.questionToPropertyKey[questionNumber]] = json[key]
    } else {
      const questionNumber = key.match(multiNumber)[1];
      const propName = config.questionToPropertyKey[questionNumber]

      if (!(propName in row)) {
        row[propName] = []
      }

      row[propName].push(json[key])
    }
  })

  return row
}

function loadIntoDB (doc) {
  console.log('------------------------------------------')
  console.log(doc)
  return Promise.resolve(doc)
}