// // MAKE SURE YOU CHOOSE GOOD, RELEVANT NAMES FOR YOUR FUNCTIONS AND PARAMETERS
//
// // 1a. Write (declare) a function that prints out "meow"
// // function printSound() {
// //   console.log("Meow");
// // }
//
// // // 1b. Call it three times in a row. Run your code to make sure it works.
// // printSound();
// // printSound();
// // printSound();
//
// // 2a. Write (declare) a function that takes one parameter and prints out the square of that number
// // function squareOfNumber(num) {
// //   return num ** 2;
// // }
// //
// // var square1 = squareOfNumber(3);
// // var square2 = squareOfNumber(4);
// // var square3 = squareOfNumber(5);
// // console.log(square1, square2, square3);

// // squareOfNumber();

// // 2b. Call it three times with three different parameters. Run your code to make sure it works.


// // 3a. Write (declare) a function that takes two parameters and prints out
// // "_____ is greater than ____" with the blanks filled in correctly with the two inputs.
//
// // function greaterThan(num1, num2) {
// //   if (num1 > num2) {
// //     return num1 + " is greater than " + num2;
// //   } else if (num2 > num1) {
// //     return num2 + " is greater than " + num1;
// //   }
// // }

// // var compare1 = greaterThan(2, 3);
// // var compare2 = greaterThan(20, 15);
// // var compare3 = greaterThan(0.6, 0.7);
// // console.log(compare1, compare2, compare3);
// // 3b. Call it three times with three different parameters
// // Make sure to try cases where the first one is bigger, the second one is bigger, and when they are equal.
// // Run your code to make sure it works.



// // 4a. Write (declare) a function that takes one parameter called name and
// // returns (not prints out, just returns) the string "Hello ____", with the name in the blank.
// function returnName(name) {
//   return "Hello " + name;
// }

// let helloPerson1 = returnName("Giovanni");
// let helloPerson2 = returnName("Elizabeth");
// let helloPerson3 = returnName("Jonathan");
// console.log(helloPerson1, helloPerson2, helloPerson3);
// // 4b. Call the function and store the result in a variable. Then, print out that variable.
// // Repeat this three times with different names.



// // 5a. Write (declare) a function that takes two parameters and
// // returns (not prints out, just returns) the average of the parameters.
function average(num1, num2) {
  return (num1 + num2) / 2;
}

let average1 = average(20, 10);
let average2 = average(100, 2);
let average3 = average(20, "apple")
console.log(average1, average2, average3);
// // 5b. Call the function and store the result in a variable. Then, print out that variable
// // in a sentence like "The average is _____".
// // Repeat this three times with different numbers. What happens if you pass in
// // something that isn't a number, like true or "apple"?
