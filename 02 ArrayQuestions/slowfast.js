/*Slow Fast Array
1. Find Middle Element
2. One-Third Element
3. Remove Element
4. Remove Duplicates from Sorted Array
5. Move Zeroes
6. Move Zeroes to Front
7. Move Negatives to Front
8. Remove All Occurrences
9. Compact Array
10. Copy Non-Zero Elements
*/

// 1. Find Middle Element
// Time: O(n)
// Space: O(1)

// Input = [10, 20, 30, 40, 50]
// Output = 30

function findMiddle(arr) {
  let slow = 0;
  let fast = 0;

  while (fast < arr.length - 1 && fast + 1 < arr.length) {
    slow++;
    fast += 2;
  }

  return arr[slow];
}

const arr = [10, 20, 30, 40, 50];

console.log(findMiddle(arr));

// 2. One-Third Element
// Fast moves 3 steps while slow moves 1.
// Time: O(n)

function oneThird(arr) {
  let slow = 0;
  let fast = 0;

  while (fast + 3 < arr.length) {
    slow++;
    fast += 3;
  }

  return arr[slow];
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Output: 3
console.log(oneThird(arr));

// 3. Remove Element (Leetcode 27) Time: O(n)

function removeElement(nums, val) {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  return slow;
}

let nums = [3, 2, 2, 3];
let k = removeElement(nums, 3);
// Why 2? Because slow also acts as a perfect counter! It only took a step when it found a good number
console.log(k); // 2
console.log(nums.slice(0, k)); // [2,2]

// 4. Remove Duplicates from Sorted Array (LeetCode 26) Time: O(n)

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1;
}

let nums = [1, 1, 2, 2, 3];

let k = removeDuplicates(nums);

console.log(k); // 3
console.log(nums.slice(0, k)); // [1,2,3]

// 5. Move Zeroes (LeetCode 283)

function moveZeroes(nums) {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
// [1,3,12,0,0]

// 6. Move Zeroes to Front - Time: O(n)

function moveZeroesFront(nums) {
  let slow = nums.length - 1;

  for (let fast = nums.length - 1; fast >= 0; fast--) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow--;
    }
  }

  return nums;
}

console.log(moveZeroesFront([1, 0, 2, 0, 3]));
// [0,0,1,2,3]

// 7. Move Negatives to Front

function moveNegativesFront(nums) {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] < 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }

  return nums;
}

console.log(moveNegativesFront([3, -1, 5, -7, 8, -2]));
// [-1,-7,-2,3,8,5]

// 8. Remove All Occurrences - Time: O(n)

function removeOccurrences(nums, target) {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== target) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  return nums.slice(0, slow);
}

console.log(removeOccurrences([1, 2, 3, 2, 4, 2], 2));
// [1,3,4]

// 9. Compact Array - Time: O(n)
// Remove all negative numbers.

function compactArray(nums) {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] >= 0) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  return nums.slice(0, slow);
}

console.log(compactArray([3, -2, 5, -7, 8]));
// [3,5,8]

// 10. Copy Non-Zero Elements - Time: O(n) - Space: O(n)
// Create a new array containing only non-zero values.

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
// [1,3,12]
