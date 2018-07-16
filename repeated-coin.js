// Use a for loop to simulate flipping a coin 100 times.
// Think carefully about how you could use Math.random() or random-int to do this.
// (There are several possible answers.)
// Keep track of how many of the flips are heads.
// Print out the total number of flips and the total number of heads at the end.
// How often is it exactly 50/100? Fun fact: this should only happen about 8% of the time.
var side = 0;
var heads = 0;
var tails = 0;
var flipSide = "";
for (var i = 0; i < 100; i++) {
  side = Math.floor(Math.random() * 2 + 1);
  if (side <= 1 && side > 0) {
    flipSide = "heads";
    heads++;
  } else {
    flipSide = "tails"
    tails++;
  }
}
console.log("You landed heads " + heads + " times. You landed tails " + tails + " times.")