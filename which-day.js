// Declare a function whichDay that takes two parameters:
// A day of the week, and a number of days from now.
// It should return the day of the week it will be that many days from now.

  // add together days and days from now
  // mod that sum by 7
  // convert that remainder back into a day

let day = 1;

function whichDay(dayOfWeek, daysFromNow) {

  if(dayOfWeek == "Sunday") {
    day = 1;
  } else if(dayOfWeek = "Monday") {
    day == 2;
  } else if(dayOfWeek = "Tuesday") {
    day == 3;
  } else if(dayOfWeek = "Wednesday") {
    day == 4;
  } else if(dayOfWeek = "Thursday") {
    day == 5;
  } else if(dayOfWeek = "Friday") {
    day == 6;
  } else if(dayOfWeek = "Saturday") {
    day == 7;
  }
  day = (day + daysFromNow) % 7;
  if(day == 1) {
    dayOfWeek = "Sunday";
  } else if(day == 2) {
    dayOfWeek = "Mondq";
  } else if(day == 3) {
    dayOfWeek = "Tuesday";
  } else if(day == 4) {
    dayOfWeek = "Wednesday";
  } else if(day == 5) {
    dayOfWeek = "Thursday";
  } else if(day == 6) {
    dayOfWeek = "Friday";
  } else if(day == 7) {
    dayOfWeek = "Saturday";
  }
  return dayOfWeek;
}

// Tests
console.log(day);


console.log(whichDay("Thursday", 4) == "Monday");
console.log(whichDay("Tuesday", 100) == "Thursday");
