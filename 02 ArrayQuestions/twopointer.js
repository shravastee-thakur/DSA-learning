/*Two pointer questions - Array (Easy)
1. Two Sum II - Input Array Is Sorted (Med)
2. Squares of a Sorted Array
3. Valid Palindrome
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

// Area = width × shorter height
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
// ----- Two Pointer Medium ---------
// ----------------------------------

// (Array)

// 1. 3Sum (LeetCode 15)

// input: [-1, 0, 1, 2, -1, -4]

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
