function thirdMax(nums) {
  let first = -Infinity,
    second = -Infinity,
    third = -Infinity;

  for (const num of nums) {
    if (first === num || second === num || third === num) continue;

    if (num > first) {
      [third, second, first] = [second, first, num];
    } else if (num > second) {
      [third, second] = [second, num];
    } else if (num > third) {
      third = num;
    }
  }

  return third === -Infinity ? first : third;
}

console.log(thirdMax([1, 2, 3, 4, 5, 6]));
