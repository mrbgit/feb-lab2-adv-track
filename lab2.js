/*********************************************************
LAB 2: SORTING AND CAMPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js

*********************************************************/
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

 persons consumed  |  rate of consumption
 ------------------|---------------------
        0          |       1/hour
        1          |       2/hour
        2          |       3/hour
        3          |       4/hour

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

function Blob(){};

var blob = new Blob();
var hoursToEatCity = 0;

var blobTimeToFinish = function (){
  var peopleEatenPerHour = 0;
  var totalPeopleEaten = 0;
  while (totalPeopleEaten < 1000) {
    peopleEatenPerHour++;
    totalPeopleEaten += peopleEatenPerHour;
    hoursToEatCity += 1;
    }
  if (totalPeopleEaten === 1000) {
    return hoursToEatCity;
  }
};

blobTimeToFinish();

var hoursSpentInDowington; // TODO: assign me the value of the
                           // above calculation

hoursSpentInDowington = hoursToEatCity;

// console.log(hoursToEatCity);

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

// TODO: implement me based on the instructions above. Be sure to then assign me to the Blob's prototype.

function hoursToOoze(population, peoplePerHour) {
  var peopleEatenPerHour = 0;
  var totalPeopleEaten = 0;
  var hoursToEatCity = 0;
  this.hoursSpentInCity = 0;
  while (totalPeopleEaten < population) {
    peopleEatenPerHour += peoplePerHour;
    totalPeopleEaten += peopleEatenPerHour;
    this.hoursSpentInCity += 1;
    }
    return this.hoursSpentInCity;
}

Blob.prototype.hoursToOoze = hoursToOoze;

blob.hoursToOoze();

assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
// console.log(blob.hoursToOoze(1000, 1) + " the real value");
// console.log(hoursSpentInDowington + " hours in Darrington");
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

assert(blob.hoursToOoze(640500, 2) === 800, "That's not how long it takes to eat through Seattle.");
assert(blob.hoursToOoze(8405837, 1) === 4100, "It's gonna take a long time to eat through New York.");
assert(blob.hoursToOoze(688701, 3) === 678, "No one is really gonna miss Detroit anyway.");

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing () {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.homePlanet = "Romulus";
  this.language = hello.romulan;
}

// sb is a SentientBeing object
function sayHello (sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
    switch (this.language) {
      case hello.klingon:
      console.log(hello.klingon);
      break;
      case hello.romulan:
      console.log(hello.romulan);
      break;
      case hello["federation standard"]:
      console.log(hello["federation standard"]);
      break;
    }
    switch (sb.language) {
      case hello.klingon:
      return hello.klingon;
      break;
      case hello.romulan:
      return hello.romulan;
      break;
      case hello["federation standard"]:
      return hello["federation standard"];
      break;
    }

    //TODO: put this on the SentientBeing prototype
  }

  SentientBeing.prototype.sayHello = sayHello;

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

function Klingon(){
  this.homePlanet = "Qo\"noS";
  this.language = hello.klingon;
};
function Human(){
  this.homePlanet = "Earth";
  this.language = hello["federation standard"];
};
function Romulan(){
  this.homePlanet = "Romulus";
  this.language = hello.romulan;
};

Klingon.prototype = new SentientBeing;
Human.prototype = new SentientBeing;
Romulan.prototype = new SentientBeing;

assert((new Human()).sayHello(new Klingon()) === "nuqneH", "the klingon should hear nuqneH");
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

assert((new Klingon()).sayHello(new Human()) === "hello", "the human should hear hello from the Klingon");
assert((new Human()).sayHello(new Romulan()) === "Jolan\"tru", "the romulan should hear Jolan\"tru from the Human");
assert((new Romulan()).sayHello(new Human()) === "hello", "the human should hear nuqneH from the romulan");
assert((new Romulan()).sayHello(new Klingon()) === "nuqneH", "the klingon should hear nuqneH from the romulan");
assert((new Klingon()).sayHello(new Romulan()) === "Jolan\"tru", "the romulan should hear Jolan\"tru from the klingon");

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one
//*********6************************************************

var arrayOfPets = ['cat', 'dog', 'goldfish', 'python', 'gerbil', 'horse', 'tyrannosaurus rex', 'crocodile', 'monkey'];
var arrayOfNumbers1 = [58,68,26,21,24,78,91,85,27,34,52,41,90,82,76,31,2,11,98,61];
var arrayOfNumbers2 = [85,28,19,44,18,73,99,42,30,33,74,97,43,40,57,42,75,85,36,28];
var arrayOfNumbers3 = [11,28,46,38,49,72,30,92,92,7,2,95,68,66,27,74,75,13,13,62];
var arrayOfNumbers4 = [87,61,53,83,8,7,86,65,92,81,78,49,61,38,57,72,87,100,20,80];
var arrayOfNumbers5 = [86,54,17,74,14,71,56,50,56,87,55,53,6,72,55,73,57,27,93,22];

var arrayOfNumbers1 = [1,2];
var arrayOfNumbers2 = [6,7];
var arrayOfNumbers3 = [4,5];
var arrayOfNumbers4 = [3,4];
var arrayOfNumbers5 = [2,3];

var arrayOfNumberArrays = [arrayOfNumbers1, arrayOfNumbers2, arrayOfNumbers3, arrayOfNumbers4, arrayOfNumbers5];

console.log (arrayOfPets);
// console.log('the last letter of array index 0 is ' + arrayOfPets[0].slice(-1));
// console.log('the last letter of array index 1 is ' + arrayOfPets[1].slice(-1));

// function lastLetterSort(stringArray) {
//   if (stringArray.slice(-1) > stringArray.slice(-2)) {
//     console.log("this is -1 slicer " + stringArray.slice(-1));
//     return 1;
//   } else if (stringArray.slice(-1) < stringArray.slice(-2)) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// function lastLetterSort(stringArray) {
//     if (stringArray.slice(-1) > stringArray.slice(-2)) {
//       console.log('this -1 slice is ' + stringArray.slice(-1))
//       return 1;
//     } else if (stringArray.slice(-1) < stringArray.slice(-2)) {
//       return -1;
//     } else {
//       return 0;
//     }
// }

// function lastLetterSort(stringArray) {
//   for (var i = 0; i < stringArray.length; i++) {
//     stringArray[i].split('').reverse('').join('');
//     console.log(stringArray[i]);
//   }
//   return stringArray;
// }

function sortByLastLetter(stringArray) {
  var tempArray = [];
  for (var i = 0; i < stringArray.length; i++) {
      tempArray.push(stringArray[i].split('').reverse('').join(''));
    }
  console.log("this is the tempArray after reverse, but before sort " + tempArray);
  tempArray.sort();
  console.log('this is the tempArray reversed and sorted ' + tempArray);
  stringArray = [];
  for (var i = 0; i < tempArray.length; i++) {
      stringArray.push(tempArray[i].split('').reverse('').join(''));
    }
  console.log('this is the sorted stringArray ' + stringArray);
  return stringArray;
}

function lastLetterSort(stringArray, sortByLastLetter){
  return stringArray;
}

lastLetterSort(arrayOfPets);

console.log('when the pet array has been sorted it is ' + arrayOfPets);

function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
numberArray.forEach(function(number){
  sum += number;
})
  return sum;
}

sumArray(arrayOfNumbers1);



function sumSort(arrayOfArrays) {
  for (var i = 0; i < arrayOfArrays.length; i++) {
    var orderVal = sumArray(arrayOfArrays[i]);
    arrayOfArrays[i].unshift(orderVal);
  }
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
  // arrayOfArrays.forEach().shift();
  arrayOfArrays.sort(function(a, b){return a-b});
  return arrayOfArrays;
}

sumSort(arrayOfNumberArrays);

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
