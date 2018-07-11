//Author: Giovanni Taveras
var readline = require("readline-sync");
console.log("Welcome to Disney Trivia! You will be tested on your knowledge of Disney characters, names, themes, and plots. All answers should start with capital letters, as should names and places. Be careful and good luck. (You might need it!)");
var score = 0;

var question1 = readline.question("How about we start with a classic? In the Lion King, where does Mufasa and his family live ");
if (question1 == "Pride Rock" || question1 == "Pride rock") {
  score += 1;
  console.log(score);
  console.log("You got that right! Good to start off with a win. Next question!");
} else {
  score -= 1;
  console.log(score);
  console.log("You got that first one wrong, but you have a few more questions to try to raise your score. Keep going.");
}

var question2 = readline.question("In Aladdin, what is the name of Jasmine’s pet tiger?");
if (question2 == "Rajah") {
  score += 1;
  console.log(score);
  console.log("You got that right! Nice one!");
} else {
  score -= 1;
  console.log(score);
  console.log("Sorry but the correct answer was 'Rajah'. You got this second one wrong, but you there are still more questions. Keep going.");
}

var question3 = readline.question("Here's an easy one. What was the name of the dragon in Mulan and who provided his voice? (Name by Voice Actor): ");
if (question3 == "Mushu by Eddie Murphy") {
  score += 1;
  console.log(score);
  console.log("Correct! Third one's a charm, right?");
} else {
  score -= 1;
  console.log(score);
  console.log("Sorry but the correct answer was 'Mushu by Eddie Murphy'. You got this third one wrong, but it's okay because there are still 2 left.");
}

var question4 = readline.question("In which state does 'The Princess and the Frog' take place?");
if (question4 == "New Orleans") {
  score += 1;
  console.log(score);
  console.log("You might've gotten this one, but the next one is sure to stump you!");
} else {
  score -= 1;
  console.log(score);
  console.log("Ahh! The fourth one got you, but this last question will be even harder so get ready.");
}

var question 5 = readline.question("Which princess has a raccoon for a sidekick? ")
if (question5 == "Pocahontas") {
  score += 1;
  console.log("Finishing it off with a winner. Nice job!");
} else {
  score -= 1;
  console.log(score);
  console.log("Sadly, you got this last one wrong, but I hope you had fun playing.");
}

if(score == 0 || score == 1) {
  console.log("You didn't do very well, but I'm sure you'll get it next time. Have a great day!")
} else if(score == 2 || score == 3) {
  console.log("You didn't do very well, but I'm sure you'll get it next time. Have a great day!")
} else if(score == 4 || score == 5) {
  console.log("You didn't do very well, but I'm sure you'll get it next time. Have a great day!")
} else
