// Code wars Kata6 Solutions

/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

/*
    1) Declare variable with empty array
    2) Loop first time and create another empty array
    3) Loop in each iteration of the first loop and push the multiply of the indexes
    4) Push the result to the main empty array 
*/

//Solution
function multiplicationTable(size) {
  let arrayOfMultiplication = [];
  for (let i = 1; i <= size; i++) {
    let row = [];
    for (let j = 1; j <= size; j++) {
      row.push(i * j);
    }
    arrayOfMultiplication.push(row);
  }

  return arrayOfMultiplication;
}
console.log(multiplicationTable(3));
