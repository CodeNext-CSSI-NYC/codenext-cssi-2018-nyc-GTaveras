// Author: Giovanni Taveras
var readline = require("readline-sync");

console.log("Poopy-di scoop Scoop-diddy-whoop. ")
var cents = readline.question("Please enter a cents as a positive integer: ");
let q = Math.floor(cents / 25);
let d = Math.floor((cents % 25) / 10);
let n = Math.floor(((cents % 25) % 10) / 5);
let p = Math.floor(((cents % 25) % 10) % 5);

console.log(cents + " cents makes:")
console.log(q + " quarters");
console.log(d + " dimes");
console.log(n + " nickels");
console.log(p + " pennies");
console.log("Thank you for using me!")
