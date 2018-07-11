// Complete these one at a time. Test each one several times to make sure it works.
// When you are done with each one, comment it out when you move to the next one, so it doesn't keep showing up.
var readline = require("readline-sync");
// 1. Ask the user for a number and print whether it is positive or negative or zero.
// var num = parseInt(readline.question("Please enter a number: "));
//  if (num > 0) {
//    console.log("Your number is positive!");
//  } else if (num == 0) {
//    console.log("Your number is 0!");
//  } else if (num < 0 ) {
//    console.log("Your number is negative!");
//  }

// 2. Ask the user to enter three numbers, and then print out the biggest number they entered.
// var num1 = parseInt(readline.question("Please enter a number: "));
// var num2 = parseInt(readline.question("Please enter a second number: "));
// var num3 = parseInt(readline.question("Please enter a third number: "));
//  if (num1 > num2 && num1 > num3) {
//    console.log("Number " + num1 + " is the largest!");
//  } else if (num1 < num2 && num2 > num3) {
//    console.log("Number " + num2 + " is the largest!");
//  } else {
//    console.log("Number " + num3 + " is the largest!");
//  }
// 3. Ask the user for a number and print whether it is odd or even
// var num1 = parseInt(readline.question("Please enter a number: "));
// if(num1 %2 == 0) {
//   console.log("Your number is even!")
// } else {
//   console.log("Your number is odd!")
// }
// 4. Ask the user to enter a letter and tell them if it is a vowel or consonant
// var letter1 = readline.question("Please enter a letter: ");
// if (letter1 == "a" || letter1 == "e" || letter1 == "i" || letter1 == "o" || letter1 == "u"){
//   console.log("Your letter is a vowel!");
// } else {
//   console.log("Your letter is a consonant!");
// }

// 5. Ask the user to enter a year, and tell them if it was a leap year.
// (You can use Google if you're not sure when leap years happen.)
// var year = parseInt(readline.question("Please enter a year: "));
// if (year %4 == 0 && year != 1700 && year != 1800 && year != 1900) {
//   console.log("That year was a leap year")
// } else {
//   console.log("That year was not a leap year.")
// }
// 6. Ask the user if they have been a citizen for at least 9 years (yes or no), ask them their age, and ask if they live in New York state.
// If they answer yes, their age is above 30, and yes, then tell them they can run for senate in NY. Otherwise, say that they cannot.
// var citizen = readline.question("Have you been a citizen for at least 9 years? ");
// var age = parseInt(readline.question("How old are you: "));
// var live = readline.question("Do you live in New York State:")
// if (citizen == "yes" && age > 30 && live == "yes"){
//   console.log("You are elligible to run for senate in New York!")
// } else {
//   console.log("I'm sorry but you are not elligible to run for senate in New York.")
// }
// 7. Write a program that asks the user to enter a whole number 1-7 and prints out the corresponding day of the week.
// If you want another challenge, look up how to use switch statements and use a switch instead of if-else for this.
// Note that we usually don't bother with switch statements unless there are more than a few elses.
var day = readline.question("Enter a number 1-7: ");
if(day == 1) {
  console.log("The day is Sunday.")
} else if(day == 2) {
  console.log("The day is Monday.")
} else if(day == 3) {
  console.log("The day is Tuesday.")
} else if(day == 4) {
  console.log("The day is Wednesday.")
} else if(day == 5) {
  console.log("The day is Thursday.")
} else if(day == 6) {
  console.log("The day is Friday.")
} else if(day == 7) {
  console.log("The day is Saturday.")
}
