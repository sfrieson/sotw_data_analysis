/*
What can we learn about people who work solely on mature apps?
*/

const Data = require('../db/schema');

Data.find({appAge: 'More than 8 years'}, 'appAge age experience education TDD roles')
  .then(results => results.map(result => {
    result.appAge = result.appAge.filter((el) => el !== '(blank)');
    return result.toObject();
  }))
  .then(results => results.filter((result) => result.appAge.length === 1))
  .then(results => {
    const counts = {};
    results.forEach(result => {
      delete result.appAge;
      delete result.TDD;
      delete result.experience;
      delete result._id;
      delete result.age;
      Object.keys(result).forEach(key => {
        if (!(key in counts)) {
          counts[key] = {};
        }
        result[key].forEach(value => {
          if (value !== '(blank)') {
            if (!(value in counts[key])) {
              counts[key][value] = 0;
            }
            counts[key][value]++;
          }
        });
      });
    });
    return counts;
  })
  .then(results => console.log(results))
