/*
Does the age of app correlate at all with whether testing is practiced?
*/

const Data = require('../db/schema');

Data.find({})
  .then(results => results.map(result => {
    result.appAge = result.appAge.filter((el) => el !== '(blank)');
    return result;
  }))
  .then(results => results.filter((result) => result.appAge.length === 1))
  .then(results => results.reduce((countObj, result) => {
    switch (result.appAge[0]) {
      case 'Less than 1 year':
        countObj.lessThanOne.push(result);
        break;
      case '1-3 years':
        countObj.oneToThree.push(result);
        break;
      case '3-8 years':
        countObj.threeToEight.push(result);
        break;
      case 'More than 8 years':
        countObj.eightAndUp.push(result);
        break;
    }
    return countObj;
  }, {lessThanOne: [], oneToThree: [], threeToEight: [], eightAndUp: []}))
  .then(results => {
    const finalObj = {
      lessThanOne: {
        total: 0,
        frontEndUnit: 0,
        backEndUnit: 0,
        TDD: 0
      },
      oneToThree: {
        total: 0,
        frontEndUnit: 0,
        backEndUnit: 0,
        TDD: 0
      },
      threeToEight: {
        total: 0,
        frontEndUnit: 0,
        backEndUnit: 0,
        TDD: 0
      },
      eightAndUp: {
        total: 0,
        frontEndUnit: 0,
        backEndUnit: 0,
        TDD: 0
      }
    };
    results.lessThanOne.forEach(result => {
      finalObj.lessThanOne.total++;
      if (result.frontEndUnit) finalObj.lessThanOne.frontEndUnit++;
      if (result.backEndUnit) finalObj.lessThanOne.backEndUnit++;
      if (result.TDD) finalObj.lessThanOne.TDD++;
    });
    results.oneToThree.forEach(result => {
      finalObj.oneToThree.total++;
      if (result.frontEndUnit) finalObj.oneToThree.frontEndUnit++;
      if (result.backEndUnit) finalObj.oneToThree.backEndUnit++;
      if (result.TDD) finalObj.oneToThree.TDD++;
    });
    results.threeToEight.forEach(result => {
      finalObj.threeToEight.total++;
      if (result.frontEndUnit) finalObj.threeToEight.frontEndUnit++;
      if (result.backEndUnit) finalObj.threeToEight.backEndUnit++;
      if (result.TDD) finalObj.threeToEight.TDD++;
    });
    results.eightAndUp.forEach(result => {
      finalObj.eightAndUp.total++;
      if (result.frontEndUnit) finalObj.eightAndUp.frontEndUnit++;
      if (result.backEndUnit) finalObj.eightAndUp.backEndUnit++;
      if (result.TDD) finalObj.eightAndUp.TDD++;
    });
    return finalObj;
  })
  .then(results => {
    results.lessThanOne.frontEndUnit = results.lessThanOne.frontEndUnit / results.lessThanOne.total;
    results.lessThanOne.backEndUnit = results.lessThanOne.backEndUnit / results.lessThanOne.total;
    results.lessThanOne.TDD = results.lessThanOne.TDD / results.lessThanOne.total;
    results.oneToThree.frontEndUnit = results.oneToThree.frontEndUnit / results.oneToThree.total;
    results.oneToThree.backEndUnit = results.oneToThree.backEndUnit / results.oneToThree.total;
    results.oneToThree.TDD = results.oneToThree.TDD / results.oneToThree.total;
    results.threeToEight.frontEndUnit = results.threeToEight.frontEndUnit / results.threeToEight.total;
    results.threeToEight.backEndUnit = results.threeToEight.backEndUnit / results.threeToEight.total;
    results.threeToEight.TDD = results.threeToEight.TDD / results.threeToEight.total;
    results.eightAndUp.frontEndUnit = results.eightAndUp.frontEndUnit / results.eightAndUp.total;
    results.eightAndUp.backEndUnit = results.eightAndUp.backEndUnit / results.eightAndUp.total;
    results.eightAndUp.TDD = results.eightAndUp.TDD / results.eightAndUp.total;
    return results;
  })
  .then(results => console.log(results));

//   .then(results => {
//     const counts = {
//       lessThanOne: {
//         total: 0,
//         frontEndUnit: 0,
//         backEndUnit: 0,
//         TDD: 0
//       },
//       oneToThree: {
//         total: 0,
//         frontEndUnit: 0,
//         backEndUnit: 0,
//         TDD: 0
//       },
//       threeToEight: {
//         total: 0,
//         frontEndUnit: 0,
//         backEndUnit: 0,
//         TDD: 0
//       },
//       eightAndUp: {
//         total: 0,
//         frontEndUnit: 0,
//         backEndUnit: 0,
//         TDD: 0
//       }
//     };
//     results.forEach(result => {
//       switch (result[0]) {
//         case 'Less than 1 year':
//           counts.lessThanOne.total++;
//           if (result)
//           break;
//         case '1-3 years':
//           counts.oneToThree.total++;
//           break;
//         case '3-8 years':
//           counts.threeToEight.total++;
//           break;
//         case 'More than 8 years':
//           counts.eightAndUp.total++;
//           break;
//       }
//     })
//   }
//
// function tallyTesting () {
//
// }
