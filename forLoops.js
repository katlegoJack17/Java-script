
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
