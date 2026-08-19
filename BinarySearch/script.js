/*========== Easy ==========

1) Binary Search (704)
2) Search Insert Position (35)
3) Find Smallest Letter Greater Than Target (744)
4) First Bad Version (278)
5) Guess Number Higher or Lower (374)
6) Valid Perfect Square (367)
7) Sqrt(x) (69)
8) Arranging Coins (441)
9) Kth Missing Positive Number (1539)
10) Missing Number (268)
11) Intersection II (350)
12) Fair Candy Swap (888)
13) Distance Value Between Two Arrays (1385)
14) Longest Subsequence With Limited Sum (1498)
15) Check If N and Its Double Exist (1346)
*/

// 1) Classic binary search
// input : [-1, 0, 3, 5, 9, 12]
// Output: 4

// target = 9

// Time Complexity: O(log n)
// Space Complexity: O(1)

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// Example
console.log(search([-1, 0, 3, 5, 9, 12], 9));

// 2. Search Insert Position
// Find the index where a target should be inserted to maintain sorted order.

// input: [1, 3, 5, 6]
// // Output: 1

// Time Complexity: O(log n)
// Space Complexity: O(1)

// target = 2

function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return left;
}

// Example
console.log(searchInsert([1, 3, 5, 6], 2));

// 3. Find Smallest Letter Greater Than Target (744)
// input: ["c", "f", "j"]
// output: "c"

// target = "a"

function nextGreatestLetter(letters, target) {
  let left = 0;
  let rigth = letters.length - 1;

  while (left <= rigth) {
    let mid = Math.floor((left + rigth) / 2);
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      rigth = mid - 1;
    }
  }
  return letters[left % letters.length];
}

console.log(nextGreatestLetter(["c", "f", "j"], "a"));

// 4. First Bad Version (278)

function solution(isBadVersion) {
  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (isBadVersion(mid)) right = mid;
      else left = mid + 1;
    }
    return left;
  };
}

// Example (Mock API)
const isBadVersion = (v) => v >= 4;
console.log(solution(isBadVersion)(5)); // Output: 4

// 5. Guess Number Higher or Lower (374)

function guessNumber(n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let res = guess(mid);

    if (res === 0) return mid;
    if (res === -1) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
}

// Example (Mock API where picked number is 6)
const guess = (num) => (num === 6 ? 0 : num > 6 ? -1 : 1);
console.log(guessNumber(10)); // Output: 6

// 6. Valid Perfect Square (367)

// Time Complexity: O(log n)
// Space Complexity: O(1)

function isPerfectSquare(num) {
  if (num < 2) return true;
  let left = 2;
  let right = Math.floor(num / 2);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sqaure = mid * mid;
    if (sqaure === num) return true;
    if (sqaure < num) left = mid + 1;
    else right = mid - 1;
  }

  return false;
}

console.log(isPerfectSquare(16)); // Output: true

// 7. Sqrt(x) (69)
// Compute and return the square root of x rounded down to the nearest integer.

function mySqrt(x) {
  if (x < 2) return x;

  let left = 2;
  let right = Math.floor(x / 2);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;
    if (square === x) return mid;
    if (square < x) left = mid + 1;
    else right = mid - 1;
  }
  return right;
}

console.log(mySqrt(8)); // Output: 2

// 8. Arranging Coins (441)

function arrangeCoins(n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let coinsNeeded = (mid * (mid + 1)) / 2;

    if (coinsNeeded === n) return mid;
    if (coinsNeeded < n) left = mid + 1;
    else right = mid - 1;
  }
  return right;
}

// Example
console.log(arrangeCoins(5)); // Output: 2

// 9. Kth Missing Positive Number (1539)

/*
You are given a sorted list of positive numbers (like [2, 3, 4, 7, 11]).
If you start counting from 1, 2, 3, 4, 5, 6, 7, 8, 9, 10..., some numbers are skipped in the array.
The skipped numbers are the missing numbers:
1 (1st missing)
5 (2nd missing)
6 (3rd missing)
8 (4th missing)
9 (5th missing)
For k = 5, the answer is 9.
*/

function findKthPositive(arr, k) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // Count missing numbers to the left of 'mid'
    let missingCount = arr[mid] - mid - 1; // Actual value - Expected value

    if (missingCount === k) return mid;
    if (missingCount < k) left = mid + 1;
    else right = mid - 1;
  }
  // left represents the number of elements in arr that are less than our target answer
  return left + k;
}

console.log(findKthPositive([2, 3, 4, 7, 11], 5)); // Output: 9

// 10. Missing Number (Binary Search Variation) (268)

// Time Complexity: O(n log n) due to sorting, then O(log n) for search.
// Space Complexity: O(1) or O(n) depending on JS sort implementation.

function missingNumber(nums) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === mid) left = mid + 1;
    else right = mid - 1;
  }
  return left;
}

console.log(missingNumber([3, 0, 1])); // Output: 2

// 11. Intersection of Two Arrays II

function intersect(nums1, nums2) {
  nums2.sort((a, b) => a - b);
  let result = [];

  for (let num of nums1) {
    let left = 0;
    let right = nums2.length - 1;
    let foundIdx = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums2[mid] === num) {
        foundIdx = mid;
        right = mid - 1;
      } else if (nums2[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    if (foundIdx !== -1) {
      result.push(num);
      nums2.splice(foundIdx, 1); // Remove to prevent double counting
    }
  }
  return result;
}

console.log(intersect([1, 2, 2, 1], [2, 2])); // Output: [2, 2]

// 12. Fair Candy Swap

function fairCandySwap(aliceSzes, bobSizes) {
  let sumA = aliceSzes.reduce((a, b) => a + b, 0);
  let sumB = bobSizes.reduce((a, b) => a + b, 0);
  let diff = (sumB - sumA) / 2;

  for (let candy of aliceSzes) {
    let target = candy + diff;

    let left = 0;
    let right = bobSizes.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (bobSizes[mid] === target) return [candy, target];
      if (bobSizes[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
  }

  return [];
}

console.log(fairCandySwap([1, 1], [2, 2])); // Output: [1, 2]

// 15. Check If N and Its Double Exist
// Imagine you have a line of numbered cards on the floor: [10, 2, 5, 3]. You want to find out if there is a Double Buddy Pair where one card is exactly twice as big as another card (like 2 and 4, or 5 and 10).

function checkIfExist(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let target = 2 * arr[i];
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      // Ensure we don't count the same index (e.g., 0 * 2 = 0)
      if (arr[mid] === target && mid !== i) return true;
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
  }
  return false;
}

// Example
console.log(checkIfExist([10, 2, 5, 3])); // Output: true
