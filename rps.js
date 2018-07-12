//Author: Giovanni Taveras
var readline = require("readline-sync");
const compNum = Math.random() * 3
let compChoice;
if (compNum > 0 && compNum < 1) {
  compChoice = "rock";
} else if (compNum > 1 && compNum < 2) {
  compChoice = "paper";
} else if (compNum > 2 && compNum < 3) {
  compChoice = "scissors";
}
var rps = readline.question("rock, paper or scissors: ");
if (rps == compChoice){
  console.log("The computer chose " + compChoice + ". You chose " + rps + ". It was a tie!")
} else if((rps == "paper" && compChoice == "scissors") || (rps == "rock" && compChoice == "paper") || (rps == "scissors" && compChoice == "rock")){
  console.log("The computer chose " + compChoice + ". You chose " + rps + ". You lost!");
} else if((rps == "scissors" && compChoice == "paper") || (rps == "paper" && compChoice == "rock") || (rps == "rock" && compChoice == "scissors")){
  console.log("The computer chose " + compChoice + ". You chose " + rps + ". You won!");
}

// Use the line const compNum = Math.random() * 3 to get a number from 0 to 3.
// Use let compChoice to declare a variable that will represent the computer's choice.
// If the number is between 0 and 1, set compChoice to "rock". If it's between 1 and 2, set it to "scissors". If it's between 2 and 3, set it to paper. Think about the best way to do this using conditionals.
// Print out something like "The computer chose _____" and fill in the blank.
// Ask the user for their choice of rock, paper, scissors.
// Using nested conditionals, determine if the user won, the computer won, or it was a tie. Tell the user that they either won, lost, or it was a tie.
