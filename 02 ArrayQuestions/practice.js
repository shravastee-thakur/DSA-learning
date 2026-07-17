function majorityElement(nums) {
  let count = 0,
    candidate = null;

  for (const num of nums) {
    if (count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

console.log(majorityElement([2, 2, 5, 5, 5, 6, 7, 1, 2, 2]));
