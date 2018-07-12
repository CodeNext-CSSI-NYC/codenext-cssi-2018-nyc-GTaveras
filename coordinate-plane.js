//Author: Giovanni Taveras
var readline = require("readline-sync");
var x1 = parseInt(readline.question("Please enter an x coordinate: "));
var y1 = parseInt(readline.question("Please enter a y coordinate: "));
var x2 = parseInt(readline.question("Please enter a second x coordinate: "));
var y2 = parseInt(readline.question("Please enter a second y coordinate: "));
var slope = ((y2 - y1) / (x2 - x1));
var know = readline.question("Do you want to know the 'midpoint' of the line segment between those points, the 'length' of the line segment between those points, or the 'slope' of the line: ")
if (know == "midpoint") {
  console.log("The midpoint of the line is (" + (x1 + x2) / 2 + ", " + (y1 + y2) / 2 + ")");
} else if (know == "length") {
  console.log("The length of that line is " + Math.sqrt((x2 - x1) ** 2 + (y1 - y2) ** 2) + ".")
} else if (know == "slope") {
  if (y2 < y1) {
    slope *= -1;
    console.log("The slope of the line is " + slope)
  } else {
    console.log("The slope of the line is " + slope)
  }
}
