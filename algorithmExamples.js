// 1. Basic Algorithm Scripting: Convert Celsius to Fahrenheit
// The algorithm to convert from Celsius to Fahrenheit is the temperature
// in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius.
// Use the variable fahrenheit already defined and assign it
// the Fahrenheit temperature equivalent to the given Celsius temperature.
// Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

convertToF(30);

// 2. Basic Algorithm Scripting: Reverse a String
// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString('hello');

// 3. Basic Algorithm Scripting: Factorialize a Number
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}

factorialize(5);

// 4. Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
  const longest = str.split(' ').reduce(function (longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, '');
  return longest.length;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');

// 5. Basic Algorithm Scripting: Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(mainArray) {
  return mainArray.map(function (subArray) {
    return Math.max.apply(null, subArray);
  });
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

// 6. Basic Algorithm Scripting: Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods
// instead.

function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}

confirmEnding('Bastian', 'n');

// 7. Basic Algorithm Scripting: Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  if (num <= 0) return '';
  if (num === 1) return str;
  else return str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes('abc', 3);

// 8. Basic Algorithm Scripting: Truncate a String
// Truncate a string (first argument)
// if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.

function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }
  return str.slice(0, num) + '...';
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);

// 9. Basic Algorithm Scripting: Finders Keepers
// Create a function that looks through an array (first argument) and
// returns the first element in the array that passes a truth test (second argument).
// If no element passes the test, return undefined.

function findElement(arr, func) {
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

// 10. Basic Algorithm Scripting: Boo who
// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
  return typeof bool === 'boolean';
}

booWho(null);

// 11. Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(' ');
}

titleCase("I'm a little tea pot");
