const Data = require('../db/schema');

Data.find({technologies: 'Service Workers'}, 'optimisticPWA')
  .then(getAvg)
  .then(function () {
    return Data.find({technologies: {$ne: 'Service Workers'}}, 'optimisticPWA');
  })
  .then(getAvg);

function getAvg (resultSet) {
  let total = 0;
  resultSet.forEach(el => {
    total += el.optimisticPWA;
  });
  const avg = total / resultSet.length;
  console.log(avg);
}
