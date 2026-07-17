function nextGreatestLetter(letters, target) {
  let left = 0,
    right = letters.length - 1;
  let result = letters[0];
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (letters[mid] > target) {
      result = letters[mid];
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}

console.log(
  "8. Next Greatest Letter:",
  nextGreatestLetter(["c", "f", "j"], "c"),
);
