//Author: Giovanni Taveras
var readline = require("readline-sync");
var height = parseInt(readline.question("Please enter the height: "));
var radius = parseInt(readline.question("Please enter the radius: "));
var lookingForWhich = parseInt(readline.question("Are you looking for height or surface area: "));
if (lookingForWhich === "height") {
  console.log("The height is: " + (Math.PI * (radius ** 2) * height));
}
if(lookingForWhich === "surface area"){
  console.log("The Surface Area is: " + ((2 * Math.PI * radius * height) + (2 * Math.PI * (r ** 2))));
}
