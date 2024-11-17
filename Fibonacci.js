// Fibonacci
function fibonacci(index) {
    const arr = [];
    for (let i = 0; i <= index; i++) {
      arr.push(i === 0 ? 1 : i === 1 ? 1 : arr[i - 1] + arr[i - 2]);
    }
    return arr[index];
  }
  console.log(fibonacci(11));