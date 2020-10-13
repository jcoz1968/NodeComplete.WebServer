// const humanizeDuration = require("humanize-duration");

// const humanizeSeconds = (secondsToHumanize) => {
//   secondsToHumanize = secondsToHumanize * 1000;
//   console.log(humanizeDuration(secondsToHumanize));
// };
// humanizeSeconds(1);
// humanizeSeconds(62);
// humanizeSeconds(22140000);

const numberOfFridaythe13ths = (year) => {
  var d = new Date();
  let x = 0;
  let totalCount = 0;
  for (x = 0; x < 12; x++) {
    d.setFullYear(year, x, 13);
    if (d.getDay() === 5) {
      totalCount++;
    }
  }
  return totalCount;
};

console.log(numberOfFridaythe13ths(2020));
console.log(numberOfFridaythe13ths(2021));
console.log(numberOfFridaythe13ths(2019));
console.log(numberOfFridaythe13ths(2017));
