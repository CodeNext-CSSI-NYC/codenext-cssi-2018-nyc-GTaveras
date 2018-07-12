//Author: Giovanni Taveras
var readline = require("readline-sync");
console.log("Welcome to Disney Trivia! You will be tested on your knowledge of Disney characters, names, themes, and plots. All answers should start with capital letters, as should names and places. Be careful and good luck. (You might need it!) Each time you correctly answer, your score goes up by 1. If you answer incorrectly, your score goes down by 1, so be careful!");
var score = 0;

var question1 = readline.question("How about we start with a classic? In the Lion King, where does Mufasa and his family live? Your answer: ");
if (question1 == "Pride Rock" || question1 == "Pride rock") {
  score += 1;
  console.log("Your score is: " + score);
  console.log("You got that right! Good to start off with a win. Next question!");
} else {
  score -= 1;
  console.log("Your score is: " + score);
  console.log("You got the first one wrong, but you have a few more questions to try to raise your score. Keep going.");
}

var question2 = readline.question("In Aladdin, what is the name of Jasmine’s pet tiger? Your answer: ");
if (question2 == "Rajah") {
  score += 1;
  console.log("Your score is: " + score);
  console.log("You got that right! Nice one!");
} else {
  score -= 1;
  console.log("Your score is: " + score);
  console.log("Sorry but the correct answer was 'Rajah'. You got this second one wrong, but you there are still more questions. Keep going.");
}

var question3 = readline.question("Here's an easy one. What was the name of the dragon in Mulan and who provided his voice? (Name by Voice Actor). Your answer: ");
if (question3 == "Mushu by Eddie Murphy") {
  score += 1;
  console.log("Your score is: " + score);
  console.log("Correct! Third one's a charm, right?");
} else {
  score -= 1;
  console.log("Your score is: " + score);
  console.log("Sorry but the correct answer was 'Mushu by Eddie Murphy'. You got this third one wrong, but it's okay because there are still 2 left.");
}

var question4 = readline.question("In what city does 'The Princess and the Frog' take place? Your answer: ");
if (question4 == "New Orleans") {
  score += 1;
  console.log("Your score is: " + score);
  console.log("You might've gotten this one, but the next one is sure to stump you!");
} else {
  score -= 1;
  console.log("Your score is: " + score);
  console.log("Ahh! The fourth one got you, but this next question will be even harder so get ready.");
}

var question5 = readline.question("Which princess has a raccoon for a sidekick? Your answer: ")
if (question5 == "Pocahontas") {
  score += 1;
  console.log("Your score is: " + score);
  console.log("Finishing it off with a winner. Nice job!");
} else {
  score -= 1;
  console.log("Your score is: " + score);
  console.log("It's okay if you got this wrong, I would've gotten it wrong too.");
}

var question6 = readline.question("What was the first Disney movie ever made? Your answer: ")
if (question6 == "Snow White" || question6 == "Snow White and the Seven Dwarfs") {
  score += 1;
  console.log("Your score is: " + score);
  console.log("An easier question, but still nice.");
} else {
  score -= 1;
  console.log("Your score is: " + score);
  console.log("Sadly, you got this easy one wrong, but you can keep going.");
}

var question7 = readline.question("What is the name of Woody's owner in Toy Story? Your answer: ")
if (question7 == "Andy") {
  score += 1;
  console.log("Your score is: " + score);
  console.log("You've probably heard it once or twice in Disney World, haven't you?");
} else {
  score -= 1;
  console.log("Your score is: " + score);
  console.log("It's on Woody's boot in the series of movies, as well as the boot of the actors in Disney World.");
}

var question8 = readline.question("Whose tea party does Alice attend? Your answer: ")
if (question8 == "The Mad Hatter's" || question8 == "The Mad Hatter" || question8 == "The Mad Hatters") {
  score += 1;
  console.log("Your score is: " + score);
  console.log("He's quite a madman.")
} else {
  score -= 1;
  console.log("Your score is: " + score);
  console.log("You probably followed the little white rabbit.");
}

var question9 = readline.question("What helps the medicine go down, in Mary Poppins? Your answer: ")
if (question9 == "A spoonful of sugar" || question9 == "Sugar") {
  score += 1;
  console.log("Your score is: " + score);
  console.log("By now, all the memories of the movies must be flooding back to you, right?")
} else {
  score -= 1;
  console.log("Your score is: " + score);
  console.log("Didn't you constantly sing the song? Anyways, get ready for the last question.");
}

var question10 = readline.question("For Cinderella to get to the ball, the fairy godmother the turns a pumpkin into what? Your answer: ")
if (question10 == "a carriage" || question10 == "carriage" || question10 == "A carriage" || question10 == "Carriage") {
  score += 1;
  console.log("Your score is: " + score);
  console.log("Glad you saw the movie. How else would Cinderella get back?")
} else {
  score -= 1;
  console.log("Your score is: " + score);
  console.log("You probably don't have fairy godparents.");
}

if(score == 0 || score == 1 || score == 2) {
  console.log("You didn't do very well. You shoudl probably brush up on your movies. Have a great day! Your final score was " + score + "!");
} else if(score == 3 || score == 4 || score == 5 || score == 6) {
  console.log("You don't have the best knowledge of Disney movies, but you did decent! Your final score was "  + score + "!");
} else if(score == 7 || score == 8 || score == 9) {
  console.log("You did amazing! You're a Disney-knowledge pro! Your final score was " + score + "!");
} else {
  console.log("You got everything correct! Youre a Disney movie master. Have a great day!")
}
