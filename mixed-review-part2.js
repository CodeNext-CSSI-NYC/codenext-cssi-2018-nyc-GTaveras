let fs = require('fs');
const words = fs.readFileSync('words.txt').toString().split("\n");
let readline = require('readline-sync');
let randomInt = require('random-int');




// Write a function that randomly returns the name of a cafe where we could have lunch.
// An array with all of the cafe names is provided.
function lunch() {
  let cafes = ["The Mezz", "Highline", "Hemispheres", "Panorama"];
  return cafes[randomInt(3)];
}
// Run your function a bunch of times and make sure all 4 of these appear, and that
// you never get undefined.
// console.log(lunch());
// console.log(lunch());
// console.log(lunch());


// Write a function that tracks the score of a football team: It asks the user to
// type in either touchdown or field goal. If they say touchdown or td,
// it adds 7 points to the score, and if they say field goal or fg it adds 3 points.
// (Yes, I am aware that there is more nuance in actual football.)
// If they type anything else, it prints out their total points and the program ends.
function football() {
  let score = 0;
  var points = readline.question("What did the team score: ");
  if (points == "touchdown" || points == "td") {
    score += 7
  } else if (points == "field goal" || points == "fg") {
    score += 3;
  }
  while (points == "touchdown" || points == "td" || points == "field goal" || points == "fg") {
    points = readline.question("What did the team score: ");
    if (points == "touchdown" || points == "td") {
      score += 7
    } else if (points == "field goal" || points == "fg") {
      score += 3;
    }
  }
  console.log(score);
}
// You can test this one yourself, since it will depend on what you type in.
// football();



// Write a function called duckDuckGoose() that prints out "Duck Duck Goose" 10 times.
// Here is the catch: you are only allowed to type "Duck" one time in your code.
function duckDuckGoose() {
  var str = "";
  var numOfPeople = randomInt(1, 10)
  for (var i = 0; i < numOfPeople; i++) {
    str += "duck ";
  }
  str += "goose";
  return str;
}
// console.log(duckDuckGoose());
// I can't test this one without looking at your code to see if you followed the rule.




// Write a function that has two parameters -- an array of strings and a letter
// -- and returns true if every string in the array starts with that letter.
// Otherwise it returns false.
function alliteration(arr, letter) {
  for (let item of arr) {
    if (item[0] != letter) {
      return false;
    }
  }
  return true;
}

// These should print true
// console.log(alliteration(["bear", "ball"], "b") == true);
// console.log(alliteration(["bear", "call"], "c") == false);




// Write a function that has one parameter -- a single letter --
// and returns true if it's a capital letter.
function isCapital(letter) {
  if (letter == letter.toUpperCase()) {
    return true;
  } else if (letter == letter.toLowerCase()) {
    return false;
  }
}
// These should print true
// console.log(isCapital("B") == true);
// console.log(isCapital("x") == false);




// Write a function that finds all words (in the array at the top) that have
// the same second and third letter and returns them in an array.
// Hint: You need to first check to make sure the word actually has three letters.
// function repeatedLetter() {
//   for (var j = 0;)
//     var < words.text; j++) {
//     secondThirdLetter = words[i].chartAt(1) + words[i].chartAt(2);
//     for (var i = 0; i < words.txt; i++) {
//
//     }
//   }
//
// }
// These should print true
// console.log(repeatedLetter().includes("assessments") == true);
// console.log(repeatedLetter().includes("from") == true);




// Write a function that takes a number as a parameter and returns whether or not
// that number is exactly one away from a multiple of 10.
function oneAway(num) {
  // Hint: One approach is to start by converting a number to a string like this:
  // let numStr = "" + num;
  if (num % 10 == 1) {
    return true;
  } else {
    return false;
  }
  // Then you want to look at a specific spot in that string.
  // Hint2: A different approach involves using %
}
// console.log(oneAway(11));
// console.log(oneAway(31));
// console.log(oneAway(20));
// // These should all print true
// console.log(oneAway(101) == true);
// console.log(oneAway(79) == true);
// console.log(oneAway(60) == false);
// console.log(oneAway(1145) == false);




// Write a function with one parameter (a number) that returns how many times
// you need to divide the number by 2 for the answer to be less than 2.
// For example, if we start with 100:
// 100 / 2 = 50
// 50 / 2 = 25
// 25 / 2 = 12.5
// 12.5 / 2 = 6.25
// 6.25 / 2 = 3.125
// 3.125 / 2 = 1.5625
// So in this case your function would return 6, since we had to divide by 2
// six times to get an answer that was less than 2.
function log2(num) {
  var times = 0;
  while (num > 2) {
    num /= 2;
    console.log(num);
    times++;
  }
  console.log("It took you " + times + " times to reach less than 2.");
}
// log2(8756676);
// I called this log2 because this is very similar to finding "log base 2" of a number.
// These should all print true
// console.log(log2(100) == 6);
// console.log(log2(1000) == 9);




// Write a function that has one parameter: a 2D Array.
// Return true if any of the rows have the number 9 two or more times.
function rowHasMultiple9s(arr) {

}
// Should be true
// console.log(rowHasMultiple9s([
//   [1, 2, 9],
//   [9, 2, 9]
// ]));
// Should be false
// console.log(rowHasMultiple9s([
//   [1, 2, 9],
//   [9, 2, 3]
// ]));