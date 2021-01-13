// Sorting by length
function sortByLength(strs) {
  return strs.sort((str1, str2) => str1.length - str2.length);
}

// Reverse a string
function reverseAString(str) {
  return str.split("").reverse().join("");
}

// Display the century of a year
function centuryFromYear(year) {
  const century = year / 100;

  if (year % 100 === 0) {
    return century;
  }
  return Math.floor(century) + 1;
}

// Function that splits an array (first argument) into groups of the length of size (second argument) and returns them as a two-dimensional array
function chunkyMonkey(values, size) {
  const arr = [values.slice(0, size), values.slice(size)];
  return arr;
}

// Fibonacci sequence
function fibonacci(num) {
  let n1 = 0;
  let n2 = 1;
  let fibo = 0;

  for (let i = 2; i <= num; i++) {
    fibo = n1 + n2;
    n1 = n2;
    n2 = fibo;
  }
  return fibo;
}

// Counting vowels/consonants of a string where vowels are given a value of 1 and consonants are given a value of 2 (reduce() method)
function countVowelConsonant1(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const array = str.split("");
  const count = array.reduce((acc, cur) => {
    if (vowels.includes(cur)) {
      return acc + 1;
    }
    return acc + 2;
  }, 0);
  return count;
}

// Counting vowels/consonants of a string where vowels are given a value of 1 and consonants are given a value of 2 (switch() method)
function countVowelConsonant2(str) {
  const array = str.split("");
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    switch (element) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        count++;
        break;
      default:
        count = count + 2;
    }
  }
  return count;
}