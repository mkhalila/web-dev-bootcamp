// Generate secretNumber
var secretNumber = Math.round(Math.random() * 100);
var guesses = 0;

// Ask user for guess
var guess = prompt("I'm thinking of a number between 0-100. Guess the number.");
guesses++;

while (Number(guess) !== secretNumber) {
  guess = (guess < secretNumber) ? prompt("Too low. Guess again.") : prompt("Too High. Guess again.");
  guesses++;
}

alert("Congratulations! It took you " + guesses + " guesses to get the right answer.");
