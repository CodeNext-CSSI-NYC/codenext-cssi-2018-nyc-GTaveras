//Author: Giovanni Taveras
var randomInt = require('random-int');
var readline = require("readline-sync");
var randomInt1 = Math.round(randomInt(1, 6));
var randomInt2 = Math.round(randomInt(1, 6));

console.log("The first number is: " + randomInt1);
var guess = readline.question("Do you think the next number will be higher or lower: ");
if ((guess == "lower" && randomInt1 > randomInt2) || (guess == "higher" && randomInt1 < randomInt2)) {
  console.log("The first number was: " + randomInt1 + ". The second number was " + randomInt2 + ".");
  console.log("You were right.");
} else {
  console.log("The first number was: " + randomInt1 + ". The second number was " + randomInt2 + ".");
  console.log("You were wrong.");
}
