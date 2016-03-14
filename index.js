// Exlporer Mode
// 3
var unassignedOne;
console.log(unassignedOne);
var unassignedTwo;
console.log(unassignedTwo);
var unassignedThree;
console.log(unassignedThree);
var unassignedFour;
console.log(unassignedFour);
var unassignedFive;
console.log(unassignedFive);

// 4
var numberOne = 1;
var numberTwo = 2;
var numberThree = 3;
var numberFour = 4;
var numberFive = 5;

// 5
var positive = "I'm cool.";
var negative = "I suck.";
var neutral = "I'm ok.";
var tongueTwister = "She sells sea shells by the sea shore.";
var tongueNotTwister = "She doesn't sell anything.";

// 6
var checkOne = true;
var checkTwo = true;
var checkThree = false;
var checkFour = false;
var checkFive = true;

// 7
var addOne = 6;
var addTwo = 10;

var sumOne = addOne + addTwo;

// 8
var bool = true;

if (bool) {
  console.log("This is totes true.");
}
else {
  console.log("This is totes false.");
}

// 9
for (var i = 0; i <= 10; i++) {
  console.log(i);
}

// Adventurer Mode
// 1
var choice = 3;

switch (choice) {
  case 1:
    console.log("a");
    break;
  case 2:
    console.log("b");
    break;
  case 3:
    console.log("c");
    break;
  case 4:
    console.log("d");
    break;
  default:
    console.log("That number was not found.");
}

// 2
var whileBool = true;
var whileLoop = 1;

while (whileBool) {
  console.log(whileLoop);
  whileLoop += 1;
  if (whileLoop > 10) {
    whileBool = false;
  }
}

// 3
var compareOne = 5;
var compareTwo = 6;

if (compareOne !== compareTwo) {
  console.log ("First compared to true.");
}

if (compareOne < compareTwo) {
  console.log ("Second compared to true.");
}

if (compareTwo > compareOne) {
  console.log ("Third compared to true.");
}

if (compareTwo === compareOne) {
  console.log ("Fourth compared to true.");
}
else {
  console.log ("Fourth compared to false.");
}

if (compareTwo == compareOne) {
  console.log ("Fifth compared to true.");
}
else {
  console.log ("Fifth compared to false.");
}

if (compareOne > compareTwo) {
  console.log ("Sixth compared to true.");
}
else {
  console.log ("Sixth compared to false.");
}

if (compareTwo < compareOne) {
  console.log ("Seventh compared to true.");
}
else {
  console.log ("Seventh compared to false.");
}

// 4
var ifBool = false;

if (!ifBool) {
  ifBool = true;
  console.log(ifBool);
}
