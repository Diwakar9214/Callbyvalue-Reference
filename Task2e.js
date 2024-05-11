
// Return all the palindromes in an array-Arrow function
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