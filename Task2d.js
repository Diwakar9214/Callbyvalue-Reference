
// Return all the prime numbers in an array-Arrow function
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primes = ((arr) =>{
    const isPrime = function(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    };

    const primeNumbers = [];
    for (const num of arr) {
        if (isPrime(num)) {
            primeNumbers.push(num);
        }
    }
    return primeNumbers;
})(numbers);

console.log("Prime numbers:", primes);