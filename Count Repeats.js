// Code wars Kata8 Solutions

/*
Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

Note: This includes any characters

Examples
'abbbbc'  => 'abc'    #  answer: 3
'abbcca'  => 'abca'   #  answer: 2
'ab cca'  => 'ab ca'  #  answer: 1
*/

/*
    1) Use split method to get array from the string
    2) Use filter method to get array with consecutive repeats
*/
function countRepeats(str) {
  const arrayFromStr = str.split('');
  return arrayFromStr.filter((ele, i) => ele === arrayFromStr[i + 1]).length;
}
console.log(countRepeats('abbbbc'));
