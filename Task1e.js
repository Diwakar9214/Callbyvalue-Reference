// Return all the palindromes in an array
// anonymous 

const words = ["level", "radar", "apple", "rotor", "banana", "noon"];

const palindromes = (function(arr) {
    const isPalindrome = function(word) {
        return word === word.split('').reverse().join('');
    };

    const palindromeWords = [];
    for (const word of arr) {
        if (isPalindrome(word)) {
            palindromeWords.push(word);
        }
    }
    return palindromeWords;
})(words);

console.log("Palindromes:", palindromes);

// IIFE


(function(arr) {
    const isPalindrome = function(word) {
        return word === word.split('').reverse().join('');
    };

    const palindromeWords = [];
    for (const word of arr) {
        if (isPalindrome(word)) {
            palindromeWords.push(word);
        }
    }
    return palindromeWords;
    console.log("Palindromes:", palindromes);
})(words);

