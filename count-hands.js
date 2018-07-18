// Copy over your card deck code. You will need that to be working in order
// to complete this exercise.

var deck = [];
var str = "";
for (var i = 1; i <= 13; i++) {
  for (var s = 1; s <= 4; s++) {
    str = "";
    if (i < 11 && i > 1) {
      str += i;
    } else if (i == 1) {
      str += "A"
    } else if (i == 11) {
      str += "J"
    } else if (i == 12) {
      str += "Q"
    } else if (i == 13) {
      str += "K"
    }
    if (s == 1) {
      str += "clubs"
    } else if (s == 2) {
      str += "diamonds"
    } else if (s == 3) {
      str += "spades"
    } else if (s == 4) {
      str += "hearts"
    }
    deck.push(str)
  }
}
// console.log(deck.length);
// console.log(deck)

function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}
var shuffled = shuffle(deck);
// console.log(shuffled)
var hands = [];
for (var i = 0; i < 7; i++) {
  hands.push(deck.shift(i));
}

console.log(hands);
console.log(deck);
//for loop//hands.push(deck.shift(i))
// 1. Shuffle the deck. This was explained in memory.js.
// 2. Deal a "hand" of seven cards to a player.
// This means there should be a new array called hand that contains 7 cards, and
// those cards should no longer be in the deck.
// Print both of them out to make sure.
// 3. Count how many of each value are in the hand. For example, if the hand ends
// up with Aceclubs, 2hearts, 2diamonds, 4spades, 5hearts, Jdiamonds, Kclubs ...
// Your code should print out something like:
// 1 Ace, 2 2s, 1 4, 1 5, 1 jack and 1 king.

// 4. If you get that working, try doing this with two hands at the same time.
// 5. If you get that working, create a function called hasTwoPair that takes in
// an array called hand and returns a boolean indicating whether or not that hand
// contains exactly two of any value. My example above would return true
// because it has two 2's. But a hand with 7 different cards would return false.