// problem 1 reverse a string
function reverseFunction(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const reversValue = reverseFunction("reazul");
console.log(`Reversed string: ${reversValue}`);

// problem 2 Count Vowels in a String

function countVowels(str, vowels) {
  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      vowelCount++;
    }
  }

  return vowelCount;
}

const countVowelValue = countVowels("programming", "aeiou");
console.log(`Number of vowels in the string: ${countVowelValue}`);

// problem 3 check if a string is a palindrome

function isPalindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[j]) {
      return false;
    }
    j--;
  }
  return true;
}

let str = "madam";
let isPalin = isPalindrome(str);
console.log(isPalin ? `${str} is a palindrome` : `${str} is not a palindrome`);

// problem 4 Find the Maximum Number
function findMaxNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
const numbers = [3, 5, 7, 2, 8, 10, 1];
const maxNumber = findMaxNumber(numbers);
console.log(`The maximum number is: ${maxNumber}`);

// problem 5 Remove Duplicates from an Array
function removeDuplicates(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

const arrayWithDuplicates = [1, 2, 3, 2, 4, 5, 1, 6];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(`Array after removing duplicates: ${uniqueArray}`);
// problem 6 Sum of All Numbers in an Array
function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const numbersArray = [1, 2, 3, 4, 5];
const totalSum = sumOfArray(numbersArray);
console.log(`The sum of the array is: ${totalSum}`);

// problem 7 Find Even Numbers in an Array
function findEvenNumbers(arr) {
  const evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}

const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = findEvenNumbers(numbersList);
console.log(`Even numbers in the array: ${evenNumbers}`);

// problem 8 Capitalize First Letter of Each Word
function capitalizeWords(str) {
  const words = str.split(" ");
  const capitalizedWords = words.map((word) => {
    if (word.length === 0) return "";
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  return capitalizedWords.join(" ");
}

const sentence = "hello world from javascript";
const capitalizedSentence = capitalizeWords(sentence);
console.log(`Capitalized sentence: ${capitalizedSentence}`);

// problem 9 Find the Factorial of a Number
function factorial(n) {
  if (n < 0) return "Factorial is not defined for negative numbers";
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

const number = 5;
const factorialValue = factorial(number);
console.log(`The factorial of ${number} is: ${factorialValue}`);

// problem 10 PingPong Challenge
function pingPongChallenge(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("PingPong");
    } else if (i % 3 === 0) {
      result.push("Ping");
    } else if (i % 5 === 0) {
      result.push("Pong");
    } else {
      result.push(i);
    }
  }
  return result;
}
const n = 15;
const pingPongResult = pingPongChallenge(n);
console.log(`PingPong Challenge result for ${n}: ${pingPongResult.join(", ")}`);
