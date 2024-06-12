
// Print numbers from 1 to 10
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Print all even numbers between 1 and 20
i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}

// Calculate the sum of all numbers from 1 to 100
i = 1;
let sum = 0;
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
