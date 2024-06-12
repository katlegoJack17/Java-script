
// Print numbers from 1 to 10
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

// Calculate the sum of all numbers from 1 to 100
i = 1;
let sum = 0;
do {
    sum += i;
    i++;
} while (i <= 100);
console.log(sum);

// Prompt the user to enter a number greater than 10
let number;
do {
    number = prompt("Enter a number greater than 10:");
} while (number <= 10);

// Simple guessing game
const correctNumber = 7; // Example correct number
let guess;
do {
    guess = prompt("Guess a number between 1 and 10:");
} while (guess != correctNumber);
console.log("Congratulations! You guessed the correct number.");
