/*
“I feel safe while browsing the web” compared with FireFox users (a browser that emphasizes privacy and security) - also compared with knowledge of GDPR
*/

const Data = require('../db/schema');
console.log('Firefox');
Data.find({browser: 'Firefox'}, 'gdpr safeWhileBrowser')
  .then(getAvg)
  .then(() => console.log('Chrome'))
  .then(() => Data.find({browser: 'Chrome'}, 'gdpr safeWhileBrowser'))
  .then(getAvg)
  .then(() => console.log('Safari'))
  .then(() => Data.find({browser: 'Safari'}, 'gdpr safeWhileBrowser'))
  .then(getAvg)
  .then(() => console.log('IE'))
  .then(() => Data.find({browser: 'Internet Explorer'}, 'gdpr safeWhileBrowser'))
  .then(getAvg)
  .then(() => console.log('Opera'))
  .then(() => Data.find({browser: 'Opera'}, 'gdpr safeWhileBrowser'))
  .then(getAvg)
  .then(() => console.log('Other'))
  .then(() => Data.find({browser: 'Other'}, 'gdpr safeWhileBrowser'))
  .then(getAvg);

function getAvg (resultSet) {
  let totalGdpr = 0;
  let totalSafe = 0;
  resultSet.forEach(el => {
    totalGdpr += el.gdpr;
    totalSafe += el.safeWhileBrowser;
  });
  console.log({
    count: resultSet.length,
    avgGdpr: totalGdpr / resultSet.length,
    avgSafe: totalSafe / resultSet.length
  });
}
