
// Temperature Check

// If-else statements
let temperature = 20; // Example temperature

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature <= 15) {
    console.log("It's cold.");
} else if (temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}

// Switch statements
switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature <= 25):
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
        break;
}

// Divisibility Check

// If-else statements
let number = 6; // Example number

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

// Switch statements
switch (true) {
    case (number % 2 === 0 && number % 3 === 0):
        console.log("Divisible by both.");
        break;
    case (number % 2 === 0):
        console.log("Divisible by 2.");
        break;
    case (number % 3 === 0):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
        break;
}

// For Loops

// Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Print all even numbers between 1 and 20
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Calculate the sum of all numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// Print each element of the array
const numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}

// Find and print the largest number in the array
const numbers2 = [3, 7, 2, 5, 10, 6];
let largest = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largest) {
        largest = numbers2[i];
    }
}
console.log(largest);

// While Loops

// Print numbers from 1 to 10
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;

// Print all even numbers between 1 and 20
i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}

// Calculate the sum of all numbers from 1 to 100
i = 1;
sum = 0;
while (i <= 100) {
    sum += i;
    i++;
}
console.log(sum);

// Print all multiples of 5 less than 50
i = 5;
while (i < 50) {
    if (i % 5 === 0) {
        console.log(i);
    }
    i++;
}

// Do While Loops

// Print numbers from 1 to 10
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

// Calculate the sum of all numbers from 1 to 100
i = 1;
sum = 0;
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
