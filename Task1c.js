// Sum of all numbers in an array

const numbers = [1, 2, 3, 4, 5];


let sum = 0;


for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

// Print the sum
console.log("The sum of all numbers in the array is: " + sum);