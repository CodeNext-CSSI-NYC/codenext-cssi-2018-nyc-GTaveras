//Author Giovanni Taveras
var readline = require("readline-sync");
var a = parseInt(readline.question("Please enter a number: "));
var b = parseInt(readline.question("Please enter a second number: "));
var c = parseInt(readline.question("Please enter a third number: "));
if ((a ** 2) + (b ** 2) == (c ** 2)){
  console.log("YES!")
} else {
  console.log("NO!")
}
