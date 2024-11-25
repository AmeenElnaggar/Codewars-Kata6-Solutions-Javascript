// Code wars Kata6 Solutions

/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.
*/

/*
    1) Use split method to get array from the string 
    2) Loop over the array with map method
    3) Calculate each character index by using reduce method
    4) Use Math.max with indexOf methods to get the biggest value of the give string
*/

//Solution
function high(s) {
  const stringValues = s
    .split(' ')
    .map(ele => [...ele].reduce((acc, ele) => acc + ele.charCodeAt(0) - 96, 0));
  return s.split(' ')[stringValues.indexOf(Math.max(...stringValues))];
}
console.log(high('man i need a taxi up to ubud'));
