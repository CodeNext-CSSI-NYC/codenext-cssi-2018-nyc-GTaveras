// Try it here https://www.mathsisfun.com/games/towerofhanoi.html
// The rules are that you can only move a disk onto a given tower if either
// 1. The tower is empty; OR
// 2. The disk is smaller than the top disk currently on the tower
// The game ends when all of the disks are on a single tower
// other than the one where they started.

var readline = require("readline-sync");
// var towerFrom = parseInt(readline.question("What tower do you want to move the top disk from: "));
// var towerTo = parseInt(readline.question("What tower do you want to move the top disk to: "));

// You should build this game. Here are some tips:
// The whole game can be represented as a 2D array.
// The first row of the array represents the first tower, the second row is the second tower, and so on.
// We will play with 3 disks. They will be represted as 3, 2, 1 where 3 is the biggest.
// The beginning of an array is the bottom of a tower, and the end of the array is top of the towrer.

// So, at the beginning, the game looks like: [
//   [3, 2, 1],
//   [],
//   []
// ]
// Note that the second and third towers are empty at the start

function startOfGame() {
  let array = [];
  // let row = [];
  // let col = [];
  for (var i = 0; row[i] == 0; i++) {
    for (col = 0; col < 3; col++) {
      if (row == 2 && col == 0) {
        array[2][0] = 3;
      } else if (row == 2 && col == 0) {
        array[1][0] = 2;
      } else if (row == 2 && col == 0) {
        array[0][0] = 1;
      } else {
        array[row][col].push("X");
      }
    }
  }
  // let array = [];
  // for (var i = 0; i <= tableNum1; i++) {
  //   for (var j = 0; j <= tableNum2; j++) {
  //     if (i == 0 && j > 0) {
  //       result += ' [' + j + ']';
  //     } else if (j == 0 && i > 0) {
  //       result += '[' + i + '] ';
  //     } else if (i > 0 && j > 0) {
  //       result += (i * j) + ' ';
  //     }
  //   }
  //   result += '\n'
  // }
  // console.log(result);
  return array;
}

startOfGame();
// The game play is just:
// Ask user to enter a "from" tower and a "to" tower.
// Each of these should have a value 0-2, where 0 is the left-most tower.
// When the user enters the towers from/to which they want to move a disk,
// make sure their move is okay by making sure that the disk being moved
// is smaller than the top (last) disk in the "to" tower (or that the "to" tower is empty).
// If it's not okay, ask them again until they enter an allowable move.
// You should have a function that checks if the game is over (which is true
// whenever either the second or third array is [3, 2, 1]).
// Play should continue until that happens.


// You should console log the array after each move (or better yet, if you want to,
// come up with a nicer way to print out the state of the game).

// You should be able to win in 7 moves as follows:
// 0 -> 2
// 0 -> 1
// 2 -> 1
// 0 -> 2
// 1 -> 0
// 1 -> 2
// 0 -> 2