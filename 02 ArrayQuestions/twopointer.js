/*Two pointer questions - Array (Easy)
1. Two Sum II - Input Array Is Sorted (Med) (167)
2. Squares of a Sorted Array (977)
3. Valid Palindrome (125)
4. Reverse String
5. Is Subsequence (LeetCode 392)
6. DI String Match (LeetCode 942)
7. Container With Most Water (Med)
8. Reverse Array In-Place / Reverse without extra array
9. Intersection of Two Arrays II (Sorted Variant)
10. Merge sorted array ((From the End))
*/

// ------- Two Pointer Medium --------
/*
//        (Array)

1. 3Sum (LeetCode 15)
2. 4. 4Sum (LeetCode 18)


//         (String)
1. String Compression (443)
2. Reverse Words in a String (151)
3. Compare Version Numbers (165)
4. Append Characters to String to Make Subsequence (2486)
5. Swap Adjacent in LR String (777)
6. Camelcase Matching (1023)
7. Long Pressed Name (925)

*/

// 1. Two Sum II - Input Array Is Sorted

// nums = [2,7,11,15]
// target = 9
// Output: [1,2]

function twoSum(arr, target) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let sum = arr[i] + arr[j];

    if (sum === target) {
      return [i + 1, j + 1];
    }

    if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
}

// console.log(twoSum([2, 7, 11, 15], 9));

// 2. Squares of a Sorted Array
// const nums = [-4, -1, 0, 3, 10];
// Output: [0, 1, 9, 16, 100]

function sortedSquares(arr) {
  let n = arr.length;
  const result = new Array(n);

  let left = 0;
  let right = n - 1;

  let position = n - 1;

  while (left <= right) {
    const leftSquare = arr[left] ** 2;
    const rightSquare = arr[right] ** 2;

    if (leftSquare > rightSquare) {
      result[position] = leftSquare;
      left++;
    } else {
      result[position] = rightSquare;
      right--;
    }
    position--;
  }

  return result;
}
console.log(sortedSquares([-4, -1, 0, 3, 10]));

// 3. Valid Palindrome
// Use two pointers.
// Skip non-alphanumeric characters.
// Compare lowercase letters.

// If left points to a space, a comma, or a symbol, the first inner while loop simply pushes left forward until it lands on a valid letter or number. The second inner while loop does the exact same thing for the right pointer, moving it backward.
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !/[a-zA-Z0-9]/.test(s[left])) {
      left++;
    }

    while (left < right && !/[a-zA-Z0-9]/.test(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));

// 4. Reverse String
// const str = ["h", "e", "l", "l", "o"];
// Output: ['o', 'l', 'l', 'e', 'h']

function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }

  return s;
}
console.log(reverseString(str));

// 5. Is Subsequence (LeetCode 392)

function isSubsequence(s, t) {
  // Initialize two pointers at the start of both strings
  let i = 0; // Pointer for string s
  let j = 0; // Pointer for string t

  // Loop until we reach the end of either string
  while (i < s.length && j < t.length) {
    // If characters match, move the pointer for s
    if (s[i] === t[j]) {
      i++;
    }
    // Always move the pointer for the main string t
    j++;
  }

  // If we successfully matched all characters in s, i will equal s.length
  return i === s.length;
}
console.log(isSubsequence("abc", "adbfc"));

//  6. DI String Match (LeetCode 942)
// (Yet nahi)
function diStringMatch(s) {
  // The available numbers are 0 to s.length
  let left = 0;
  let right = s.length;
  let result = [];

  // Traverse the string
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      // We need an increase, so pick the smallest available number
      result.push(left);
      left++;
    } else {
      // We need a decrease, so pick the largest available number
      result.push(right);
      right--;
    }
  }

  // At the end, left and right will be equal.
  // Push the last remaining number.
  result.push(left);

  return result;
}

// 7. Container With Most Water
// const height = [1,8,6,2,5,4,8,3,7];
// Output: 49

// Area = width × shorter height (short because water spills over the lowest side)
// Move the pointer with the smaller height.

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const currentHeight = Math.min(height[left], height[right]);
    const area = width * currentHeight;

    maxWater = Math.max(maxWater, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

console.log(maxArea(height));

// 8. Reverse Array In-Place / Reverse without extra array
// Output: [6, 5, 4, 3, 2, 1]

function reverseInPlace(arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]; // JS swap
    left++;
    right--;
  }
  return arr;
}
console.log(reverseInPlace([1, 2, 3, 4, 5, 6]));

// 9. Intersection of Two Arrays II (Sorted Variant)

function intersect(nums1, nums2) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}

console.log(intersect([1, 2, 2, 3], [2, 2, 4]));

// Output [2,2]

// 10. Merge Sorted Array (From the End)
// const nums1 = [1,2,3,0,0,0];
// const nums2 = [2,5,6];

function merge(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  return nums1;
}

console.log(merge(nums1, 3, nums2, 3));

// ----------------------------------
// ----- Two Pointer Medium ------------------------------------------------
// ----------------------------------
// 1. 3Sum (LeetCode 15)
// 2. 4Sum (LeetCode 18)

// (Array)

// 1. 3Sum (LeetCode 15)

// input: [-1, 0, 1, 2, -1, -4]
// output: [[-1, -1, 2], [-1, 0, 1]]

function threeSum(nums) {
  nums.sort((a, b) => a - b); // [-4, -1, -1, 0, 1, 2]

  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

// 2. 4Sum (LeetCode 18)

function fourSum(nums, target) {
  nums.sort((a, b) => a - b);

  let result = [];

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[i] === nums[j - 1]) {
        continue;
      }

      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);

          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }

          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
}

// -----------------------(String)----------------------
/*
1. String Compression (443)
2. Reverse Words in a String (151)
3. Compare Version Numbers (165)
4. Append Characters to String to Make Subsequence (2486)
5. Swap Adjacent in LR String (777)
6. Camelcase Matching (1023)
7. Long Pressed Name (925)
8. 3Sum Closest (16)
9. Sort Colors (75)
10. Rotate Array (189)
11. Next Permutation (31)
12. Valid Triangle Number (611)
13. Boats to Save People (881)

*/

// 1. String Compression (LeetCode 443)
// Time: O(n)
// Space: O(1)
let chars = ["a", "a", "b", "b", "c", "c", "c"];

Output: ["a", "2", "b", "2", "c", "3"];

function compress(chars) {
  let write = 0;
  let read = 0;

  while (read < chars.length) {
    let char = chars[read];
    let count = 0;

    while (read < chars.length && chars[read] === char) {
      count++;
      read++;
    }

    chars[write] = char;
    write++;

    if (count > 1) {
      let countString = count.toString();

      for (let digit of countString) {
        chars[write] = digit;
        write++;
      }
    }
  }

  return write;
}

let length = compress(chars);

console.log(length); // 6
console.log(chars.slice(0, length));

// 2. Reverse Words in a String (151)
// Input: s = "  hello world  "
// Output: "world hello"

function reverseWords(s) {
  let result = "";
  let i = s.length - 1; // Start from the very end of the string

  while (i >= 0) {
    // 1. Skip any trailing spaces between words
    while (i >= 0 && s[i] === " ") {
      i--;
    }

    // If we've hit the start of the string while skipping spaces, we're done
    if (i < 0) break;

    // 2. We found a character! Mark the 'right' pointer at the end of the word
    let right = i;

    // 3. Move leftwards to find where this word begins
    while (i >= 0 && s[i] !== " ") {
      i--;
    }

    // 4. Mark the 'left' pointer at the start of the word
    // (i is currently sitting on a space, so the word starts at i + 1)
    let left = i + 1;

    // 5. Extract the word using our two pointers
    let word = s.substring(left, right + 1);

    // 6. Append it to our result string
    if (result.length === 0) {
      result += word; // First word doesn't need a space before it
    } else {
      result += " " + word; // Add a space before subsequent words
    }
  }

  return result;
}

// 3. Compare Version Numbers (165)
// Input: version1 = "1.0.1", version2 = "1"

function compareVersion(version1, version2) {
  let i = 0;
  let j = 0;

  while (i < version1.length || j < version2.length) {
    let num1 = 0;
    let num2 = 0;

    while (i < version1.length && version1[i] !== ".") {
      num1 = num1 * 10 + parseInt(version1[i]);
      i++;
    }

    while (j < version2.length && version2[j] !== ".") {
      num2 = num2 * 10 + parseInt(version2[j]);
      j++;
    }

    if (num1 > num2) return 1;
    if (num1 < num2) return -1;

    i++;
    j++;
  }

  return 0;
}

console.log(compareVersion("1.0.1", "1"));

// 4. Append Characters to String to Make Subsequence (2486)
// Input: s = "coaching", t = "coding"

// You are given a base string (s) and a target string (t). Your job is to find the minimum number of characters you need to add to the very end of s so that t becomes a subsequence of s.

// Output: 4

// Why? You can find the "co" from "coding" inside "coaching". But you cannot find the "ding" part in that order. You have to append those 4 characters to the end of s to make it work.

function appendCharacters(s, t) {
  let i = 0; // Pointer to scan through s
  let j = 0; // Pointer to track matched characters in t

  // Traverse until we hit the end of either string
  while (i < s.length && j < t.length) {
    // If the characters match, move the t pointer forward
    if (s[i] === t[j]) {
      j++;
    }

    // Always move the s pointer forward to continue scanning
    i++;
  }

  // The number of characters to append is the remaining unmatched characters in t
  return t.length - j;
}

console.log(appendCharacters("coaching", "coding"));

// 5. Swap Adjacent in LR String (777)
// Input: start = "RXXL", end = "XRXL"

/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
function canTransform(start, end) {
  if (start.length !== end.length) return false;

  let i = 0; // Pointer for start string
  let j = 0; // Pointer for end string
  const n = start.length;

  while (i < n || j < n) {
    // 1. Skip all 'X's in the start string
    while (i < n && start[i] === "X") i++;

    // 2. Skip all 'X's in the end string
    while (j < n && end[j] === "X") j++;

    // If both pointers reached the end, we successfully matched everything
    if (i === n && j === n) return true;

    // If only one pointer reached the end, the L/R counts don't match
    if (i === n || j === n) return false;

    // The characters must be in the exact same relative order
    if (start[i] !== end[j]) return false;

    // 'L' can only move left (so its start index must be >= end index)
    if (start[i] === "L" && i < j) return false;

    // 'R' can only move right (so its start index must be <= end index)
    if (start[i] === "R" && i > j) return false;

    // Move to the next characters
    i++;
    j++;
  }

  return true;
}

// 6. Camelcase Matching (1023)
// Input: queries = ["FooBar", "FooBarTest"], pattern = "FB"

/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
function camelMatch(queries, pattern) {
  const result = [];

  for (let query of queries) {
    let j = 0;
    let isMatch = true;

    for (let i = 0; i < query.length; i++) {
      if (j < pattern.length && query[i] === pattern[j]) {
        j++;
      } else if (query[i] >= "A" && query[i] <= "Z") {
        isMatch = false;
        break;
      }
    }

    if (isMatch & (j === pattern.length)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}

console.log(camelMatch(["FooBar", "FooBarTest"], "FB"));

// 7. Long Pressed Name (925)
// Input: name = "alex", typed = "aaleex"

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
function isLongPressedName(name, typed) {
  let i = 0; // Pointer for 'name'
  let j = 0; // Pointer for 'typed'

  // We must process every character in 'typed'
  while (j < typed.length) {
    // Condition 1: Characters match perfectly
    if (i < name.length && name[i] === typed[j]) {
      i++;
      j++;
      // Condition 2: It's a long press (matches the previous typed character)
    } else if (j > 0 && typed[j] === typed[j - 1]) {
      j++;
      // Condition 3: Rogue character or missing character
    } else {
      return false;
    }
  }

  // If we successfully typed the whole name, i should have reached the end of name
  return i === name.length;
}

console.log(isLongPressedName("alex", "aaleex"));

// 8. 3Sum Closest (16)
// Input: nums = [-1, 2, 1, -4], target = 1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function threeSumClosest(nums, target) {
  // 1. Sort the array (mandatory for Two-Pointer approach)
  nums.sort((a, b) => a - b);

  // Initialize closestSum with the first three elements
  // This gives us a valid starting point to compare against
  let closestSum = nums[0] + nums[1] + nums[2];

  // 2. Lock in the first number
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    // 3. Two-Pointer approach for the remaining two numbers
    while (left < right) {
      let currentSum = nums[i] + nums[left] + nums[right];

      // If we found a sum closer to the target, update our closestSum
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      // If the sum is exactly the target, we can't get any closer!
      if (currentSum === target) {
        return currentSum;
      }
      // If our sum is too small, move left pointer to increase it
      else if (currentSum < target) {
        left++;
      }
      // If our sum is too large, move right pointer to decrease it
      else {
        right--;
      }
    }
  }

  return closestSum;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));

// Sort Colors (75)
// Input: nums = [2, 0, 2, 1, 1, 0],  Output: [0, 0, 1, 1, 2, 2]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  // The scout (mid) stops once it crosses the high pointer
  while (mid <= high) {
    if (nums[mid] === 0) {
      // Found a 0: Swap it to the 'low' zone
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // Found a 1: It belongs in the middle, just move on
      mid++;
    } else if (nums[mid] === 2) {
      // Found a 2: Swap it to the 'high' zone
      [nums[mid], nums[high]] = [nums[high], nums[mid]];

      // IMPORTANT: We decrement high, but we DO NOT increment mid here!
      high--;
    }
  }
}

console.log(sortColors([2, 0, 2, 1, 1, 0]));

// Rotate Array (189)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  // If k is larger than the array size, rotating 8 times on a 5-element array
  // is the exact same as rotating 3 times. We use modulo to find the true rotations.
  k = k % nums.length;

  // Helper function: Standard Two-Pointer reversal
  const reverse = function (left, right) {
    while (left < right) {
      // Swap the elements
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  };

  // Step 1: Reverse the entire array [7, 6, 5, 4, 3, 2, 1]
  reverse(0, nums.length - 1);

  // Step 2: Reverse the first k elements [5, 6, 7, 4, 3, 2, 1]
  reverse(0, k - 1);

  // Step 3: Reverse the remaining elements [5, 6, 7, 1, 2, 3, 4]
  reverse(k, nums.length - 1);
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// 11. Next Permutation (31)
// Input: nums = [1, 3, 5, 4, 2]
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
  let i = nums.length - 2;

  // Step 1: Find the first decreasing element from the right
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  // If the entire array isn't sorted in descending order (e.g., [3, 2, 1])
  if (i >= 0) {
    let j = nums.length - 1;

    // Step 2: Find the first element from the right that is strictly greater than nums[i]
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }

    // Step 3: Swap them
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // Step 4: Reverse the suffix (everything to the right of index i)
  let left = i + 1;
  let right = nums.length - 1;

  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}

console.log(nextPermutation([1, 3, 5, 4, 2]));

// 12. Valid Triangle Number (611)
// Input: nums = [2, 2, 3, 4]  Output: 3

/**
 * @param {number[]} nums
 * @return {number}
 */
function triangleNumber(nums) {
  nums.sort((a, b) => a - b);
  let count = 0;

  for (let i = nums.length - 1; i >= 2; i--) {
    let left = 0;
    let right = i - 1;

    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        count += right - left;
        right--;
      } else {
        left++;
      }
    }
  }

  return count;
}

console.log(triangleNumber([2, 2, 3, 4]));

// 13. Boats to Save People (881)
// Input: people = [3, 2, 2, 1], limit = 3

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
function numRescueBoats(people, limit) {
  // 1. Sort the people by weight from lightest to heaviest
  people.sort((a, b) => a - b);

  let left = 0; // The lightest person
  let right = people.length - 1; // The heaviest person
  let boats = 0;

  // Continue until everyone has been assigned a boat
  // (We use <= because if left === right, there is one person left who needs a boat)
  while (left <= right) {
    // Can the lightest and heaviest person share a boat?
    if (people[left] + people[right] <= limit) {
      left++; // Lightest person gets on the boat
      right--; // Heaviest person gets on the boat
    } else {
      // Heaviest person is too heavy to share, they must go alone
      right--;
    }

    // No matter what happened above, one boat just left the dock
    boats++;
  }

  return boats;
}

console.log(numRescueBoats([3, 2, 2, 1], 3));
