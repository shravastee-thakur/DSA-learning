// arr = [1, 2, 3, 4, 5];

function sumArr(arr) {
  let sum = arr.reduce((a, b) => a + b * 2, 0);

  return sum;
}

console.log(sumArr([1, 2, 3, 4, 5]));
