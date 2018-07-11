//Author: Giovanni Taveras
var readline = require("readline-sync");
var HorT = Math.random;
var coin = 0;
if(HorT > 0.5){
  coin = "heads";
} else {
  coin = "tails"
}
var guess = readline.question("Do you think the the coin flipped heads or tails: ");
if (guess ==  coin) {
  console.log("You are right! The coin landed " + coin + ".");
} else if (guess != coin) {
  console.log("You are wrong. The coin landed " + coin + ".");
}
