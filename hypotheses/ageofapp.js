/*
How old are apps?
Filter data by people who only reported one response for how old their app was, presuming that it is their full-time job where they are spending the most time
*/

const Data = require('../db/schema');

Data.find({}, 'appAge')
  .then(results => results.map(result => result.appAge ? result.appAge.filter((el) => el !== '(blank)') : []))
  .then(results => {
    const counts = {
      lessThanOne: 0,
      oneToThree: 0,
      threeToEight: 0,
      eightAndUp: 0
    };
    results.forEach(result => {
      switch (result[0]) {
        case 'Less than 1 year':
          counts.lessThanOne++;
          break;
        case '1-3 years':
          counts.oneToThree++;
          break;
        case '3-8 years':
          counts.threeToEight++;
          break;
        case 'More than 8 years':
          counts.eightAndUp++;
          break;
      }
    });
    console.log(counts);
  });
