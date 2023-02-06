// ASSIGNMENT 4

// Problem 1
// This function takes in a positive number and then multiplies 3 to it, takes the result and adds 10, takes the new result and divides it by 2 and finally subtracts 5 from the new result and returns it. The function will only take positive integers, no strings are allowed.
function mindGame(number) {
  // Since the question asked me to take positive numbers so I am handling exception for negative numbers and floats as well
  const type = typeof number;
  //This line checks for empty parameter as well.
  if (number < 0 || number % 1 !== 0 || type !== "number")
    return "Please enter a positive number!";
  return (number * 3 + 10) / 2 - 5;
}

// Problem 2
// This function takes in a string only and then counts the number of characters in it and returns even if the number is even or returns odd if the number is odd.
function evenOdd(word) {
  const type = typeof word;
  //This line checks for empty parameter as well.
  if (type !== "string" || word.length === 0) return "Please enter a word!";

  if (word.length % 2 === 0) return "Even";
  else return "Odd";
}

// Problem 3
// This function takes in any number, subtracts 7 from it and returns the answer if the difference is less than 7 or else it returns the double of the input number.
function isLGSeven(number) {
  const type = typeof number;
  //This line checks for empty parameter as well.
  if (type !== "number") return "Please enter a number!";

  let difference = number - 7;
  if (difference < 7) return difference;
  else return number * 2;
}

// Problem 4
// This function takes in a non empty array and returns the total number of negative numbers(bad data) available;
function findingBadData(array) {
  //This line checks for empty parameter as well.
  if (Array.isArray(array) === false || array.length === 0)
    return "Please enter an array which cannot be empty";

  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) count++;
  }

  return count;
}

let arr = [-2, 3, 2, 3, 3, -9],
  arr2 = [];

console.log(findingBadData(arr2));
