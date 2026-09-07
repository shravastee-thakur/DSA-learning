function checkIfExist(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let target = 2 * arr[i];
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target && mid !== i) return true;
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
  }
  return false;
}

console.log(checkIfExist([10, 2, 5, 3])); // Output: true
