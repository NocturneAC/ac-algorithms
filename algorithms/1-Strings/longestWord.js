/**
Take 30 minutes to work on this assignment. Make sure to ask for help if you get stuck. If you need more than 30 minutes, we will have time on Friday. 

Read through the function and write comments to explain what is happening in the code.

 1. How would we change this to find the shortest word?
 2. How would you display the actual word in the console?
 */

function findLongestWord(str) {
  // the function we are defining called findLongestWord has a parameter we are passing in, called str
  var words = str.split(' ');
  // defining the variable words with the value of str.split(" ")
  // this passes in the parameter assigned above on line 10 and assigns a function with it to split an array of substrings, then returns the new array without changing the original string
  var longestWordLength = 0;
  // this sets the variable longestWordLength to the value of num zero
  var shortestWordLength = 0;
  
  for (var i = 0; i < words.length; i++) {
    // this is a for loop with an index indicator of zero, this will count up from zero to determine the length of the variable words
    if (words[i].length > longestWordLength) {
      // conditional statement: if words[i].length is greater than 0, then count up
      longestWordLength = words[i].length;
    } else if (words[i].length > shortestWordLength) {
      shortestWordLength = words[i].length;
      // hey you! you didn't need to do all this extra work. slow down and breathe :)
    }
  }
  
  return longestWordLength;
  // this returns the length of the word, stops the function
}

console.log(words);
// console.log(str);

// this was another student's solution:
// function findShortestWord(str) {
//   var words = str.split(' ');
//   var shortestWordLength = Infinity;
  
//   for (var i = 0; i < words.length; i++) {
//     if (words[i].length < shortestWordLength) {
//       shortestWordLength = words[i].length;
//     }
//   }
  
//   return shortestWordLength;
// }