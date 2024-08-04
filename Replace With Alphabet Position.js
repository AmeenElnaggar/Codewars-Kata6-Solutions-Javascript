// Code wars Kata6 Solutions

/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 
*/

/*
    1) Use regularExpression to get string with alphaetics only
    2) Use split method to get array from the string
    3) Loop over the arr with map method to get the charCode Of Each ele
    4) Use join method to get string again with spaces
*/

// Solution
function alphabetPosition(text) {
  return text
    .replace(/[^a-z]/gi, '')
    .toLowerCase()
    .split('')
    .map(ele => ele.charCodeAt() - 96)
    .join(' ');
}

console.log(alphabetPosition('ameen Sayed'));
