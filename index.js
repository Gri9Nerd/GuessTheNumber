const prompt = require("prompt-sync")();
const random = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log("Welcome to Guess the No. game!!!\n");
do {
  var a = prompt("Guess a random no. btwn 1-10:");
  if (random == a) {
    console.log("Congrats!!! You have guessed the right number");
    break;
  } else if (a < random) {
    console.log("Never mind , Try a higher number");
  } else if (a > random) {
    console.log("Never mind , Try a lower number");
  }
} while (a !== random);
