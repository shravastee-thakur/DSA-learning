function copyNonZero(nums) {
  let result = [];

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      result.push(nums[fast]);
    }
  }

  return result;
}

console.log(copyNonZero([0, 1, 0, 3, 12]));
