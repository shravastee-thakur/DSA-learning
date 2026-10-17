function firstNegative(arr, k) {
  let result = [];
  let negatives = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negatives.push(arr[i]);
    }

    if (i >= k - 1) {
      if (negatives.length > 0) {
        result.push(negatives[0]);
      } else {
        result.push(0);
      }

      let leftEdgeNumber = arr[i - k + 1];
      if (leftEdgeNumber === negatives[0]) {
        negatives.shift();
      }
    }
  }
  return result;
}

console.log(firstNegative([-8, 2, 3, -6, 10], 2));
