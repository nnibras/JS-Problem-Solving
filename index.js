// ASSIGNMENT 4

// Problem 1
// This function takes in a positive number and then does some operation and returns the operated value. The function will only take in positive integer.
function mindGame(number) {
  // Since the question asked me to take positive numbers so I am handling exception for negative numbers as well
  if (number < 0 || number % 1 !== 0) return "Please enter a positive number";
  else return (number * 3 + 10) / 2 - 5;
}
