const humanizeDuration = require("humanize-duration");

const humanizeSeconds = (secondsToHumanize) => {
  console.log(humanizeDuration(secondsToHumanize));
};
humanizeSeconds(1);
humanizeSeconds(62);

const alteredString = (stringToParse) => {
  //last character
  const alteredText = stringToParse.slice(0, stringToParse.length - 1);
  //first character
  return alteredText.slice(1);
};

const greeter = (name = "user", age) => {
  console.log("hello " + name);
};

const peopleLeftOnBus = (changesPerBusStop) => {
  const passengersOnBus = changesPerBusStop.reduce(
    (totalPassengers, [peopleOn, peopleOff]) =>
      totalPassengers + peopleOn - peopleOff,
    0
  );
  console.log(passengersOnBus);
};

peopleLeftOnBus([
  [10, 0],
  [5, 3],
  [4, 4],
  [3, 8],
  [0, 2],
]);

peopleLeftOnBus([
  [3, 0],
  [9, 1],
  [4, 10],
  [12, 2],
  [6, 1],
  [7, 10],
]);

peopleLeftOnBus([
  [3, 0],
  [9, 1],
  [4, 8],
  [12, 2],
  [6, 1],
  [7, 8],
]);

// console.log(alteredString("helloworld"));

const walk = (n) => {
  const returnVal = [...new Array((n % 2 !== 0 ? n + 1 : n) / 2)]
    .map((x) => ["n,s", "e,w", "s,n", "w,e"][Math.floor(Math.random() * 4)])
    .join(",")
    .split(",")
    .slice()
    .sort(() => Math.random() - 0.5);
  return returnVal;
};

// console.log(walk(5));

const scrabbleScore = (wordToScore) => {
  const values = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g: 2,
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10,
  };
  var multiplier = 1;

  if (wordToScore.indexOf("(") > 0) {
    multiplier = getDoubleTriple(wordToScore);
    wordToScore = wordToScore.slice(0, -3);
  }

  const lettersInWord = wordToScore.toLowerCase();
  let score = 0;
  for (let i = 0; i < wordToScore.length; i++) {
    score += values[lettersInWord[i]];
  }

  const doubleLetterMod = getDoubleLetterModifier(wordToScore.toLowerCase());
  if (doubleLetterMod !== "") {
    score += values[doubleLetterMod];
  }

  const tripleLetterMod = getTripleLetterModifier(wordToScore.toLowerCase());
  if (tripleLetterMod !== "") {
    score += values[tripleLetterMod];
  }

  if (wordToScore.replace("*", "").length >= 7) {
    score += 50;
  }
  return score * multiplier;
};

const getDoubleTriple = (wordToScore) => {
  return wordToScore.indexOf("(d)") > 0 ? 2 : 3;
};

const getDoubleLetterModifier = (wordToScore) => {
  const regex = /\*+/g;
  var result = regex.test(wordToScore);
  if (!result) {
    return "";
  }
  var astIdx = wordToScore.lastIndexOf("*");
  var chr = wordToScore.charAt(astIdx - 1);
  return chr;
};

const getTripleLetterModifier = (wordToScore) => {
  const regex = /\*\*+/g;
  var result = regex.test(wordToScore);
  if (!result) {
    return "";
  }
  var astIdx = wordToScore.lastIndexOf("*");
  var chr = wordToScore.charAt(astIdx - 2);
  return chr;
};

const score = scrabbleScore("tedius");
console.log(`Your score is: ${score}`);

const diamond = (numberOfStars) => {
  const line = 1;
  const space = Math.floor(number / 2);
  const mid = Math.ceil(number / 2);
  const returnVal = "";
  const asterisk = 1;
  if (numberOfStars % 2 === 0) {
    returnVal = `${numberOfStars} must be an odd number`;
  } else {
    while (line <= numberOfStars) {
      for (var i = 0; i < space; i++) {
        returnVal += "\xa0\xa0";
      }
      for (var i = 0; i < asterisk; i++) {
        returnVal += "*";
      }
      returnVal += "\n";
      line++;
      if (line <= mid) {
        asterisk += 2;
        space--;
      } else {
        asterisk -= 2;
        space++;
      }
    }
  }
  return returnVal;
};

const isPrime = (x) => {
  let d = x - 1;
  while (d > 1) {
    if (x % d == 0) return false;
    d--;
  }
  return true;
};

function getLoggedInUser() {
  var callbackURL = "../ws/AjaxServices.aspx/GetCurrentUser";
  $.ajax({
    type: "POST",
    url: callbackURL,
    data: {},
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
      if (result.d === null) {
        $.unblockUI();
        return;
      }
      loggedInUser = result.d;
      $.unblockUI();
    },
    error: function (error) {
      alert("Error getting logged in user: " + error.responseText);
      $.unblockUI();
      return;
    },
  });
}

const getSumForTarget = (arr, sum) => {
  const returnArr = [];
  const needToBreak = false;
  for(int i = 0; i < arr.length, i++) {
    let numOne = arr[i];
    if(!needToBreak) {
      for(int x = i + 1; x < arr.length; x++) {
        let numTwo = arr[x];
        if((numOne + numTwo) === sum) {
          returnArr.push(numOne);
          returnArr.psh(numTwo);
          needToBreak = true;
          break;
        }
      }      
    }
  }
  return returnArr;
}

const sumForTarget = getSumForTarget([1,2,3], 4);

// function getSumForTarget(int[] arr, int sum) {
//   const returnArr = [];
//   for(int i = 0; i < arr.length, i++) {
//     let numOne = arr[i];
//     for(int x = i + 1; x < arr.length; x++) {
//       let numTwo = arr[x];
//       if((numOne + numTwo) === sum) {
//         returnArr.push(numOne);
//         returnArr.psh(numTwo);
//       }
//     }
//   }
//   return returnArr;
// }


