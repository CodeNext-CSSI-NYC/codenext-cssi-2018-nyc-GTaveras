// 1a. Use a while loop to print out numbers from 1 to 10
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// 1b. Use a while loop to print out numbers from 30 to 15
// let i = 30;
// while (i >= 15) {
//   console.log(i);
//   i--;
// }

// 2. Write a program that keeps rolling a die until the roll is a 5. Print out each roll.
// let i = 0;
// while (i != 5) {
//   i = Math.round(Math.random() * 6);
//   console.log(i);
// }
// If you haven't yet done so, you should run
// npm install random-int
// and use that to get a random number from 1 to 6.
// Google "npm random-int" for more info.



// 3. Write a program that asks the user to guess a secret password.
// Until the user enters the correct password (which is chosen by you in advance),
// the program will keep asking for all eternity. When they finally do enter the
// correct password, exit the loop and print a congratulatory message.
var readline = require("readline-sync");
var tries = 3;
// console.log(tries);
var userInput = readline.question("Enter password: ");
var password = "pizza";
while (userInput != password && tries >= 2) {
  console.log("Sorry! That's incorrect.");
  tries--;;
  console.log("You have " + tries + " tries left.")
  userInput = readline.question("Enter password: ");
}
if (tries == 1) {
  console.log("You are a robot. You do not get to try again.");
}
if (userInput == password) {
  console.log("Nice Job! You guessed the password.");
}

// Hint: Declare userInput outside the loop and initialize it to the value of readline.question("Enter password: ").
// The while loop will check if userInput matches the correct password.
// If not, inside the loop you should print "Sorry! That's incorrect", then
// assign userInput to the value of readline.question("Enter password: ") again.

// Bonus: Enhance your program to only allow the user to try entering the correct password three times.
// If they fail three times, the program should kick them out and tell them they are a robot.
// When the user enters the wrong password, the program tells them that they are wrong,
// along with how many attempts they've made so far.