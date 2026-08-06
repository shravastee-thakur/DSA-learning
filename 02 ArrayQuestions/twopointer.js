/*Two pointer questions - Array
1. Two Sum II - Input Array Is Sorted
2. Squares of a Sorted Array
3. Valid Palindrome
4. Reverse String
5. Is Subsequence (LeetCode 392)
6. DI String Match (LeetCode 942)
7. Container With Most Water
8. Reverse Array In-Place / Reverse without extra array
9. Intersection of Two Arrays II (Sorted Variant)
10. Merge sorted array ((From the End))
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


// ----- SLOW FAST Easy ---------

// How to Recognize This Pattern Immediately
// Whenever a problem asks for in-place modification with these conditions:
// "Modify the array in-place with $O(1)$ extra memory"
// "Filter, remove, or rearrange specific elements while maintaining relative order"

/* 
1. Remove Duplicates
2. Remove Element
3. Move Zeroes
4. Duplicate Zeros (LeetCode 1089)

*/

// 1. Remove Duplicates

function removeDuplicates(arr) {
  if (arr.length === 0) return 0;

  let slow = 0;

  for (let fast = 1; fast < arr.length; fast++) {
    if (arr[fast] !== arr[slow]) {
      slow++;
      arr[slow] = arr[fast];
    }
  }

  return slow + 1;
}

// 2. Remove Element

function removeElement(arr, val) {
  let slow = 0;

  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[fast] !== val) {
      arr[slow] = arr[fast];
      slow++;
    }
  }

  return slow;
}

let arr = [3, 2, 2, 3];

let length = removeElement(arr, 3);

console.log(length); // 2
console.log(arr.slice(0, length)); // [2, 2]

// 3a). Move Zeroes to front (Slow Fast)

function moveZeroesToFront(arr) {
  let slow = arr.length - 1;

  for (let fast = arr.length - 1; fast >= 0; fast--) {
    if (arr[fast] !== 0) {
      [arr[slow], arr[fast]] = [arr[fast], arr[slow]];
      slow--;
    }
  }

  return arr;
}

console.log(moveZeroesToFront([1, 1, 0, 1, 0, 1, 1, 0, 0]));

// 3b). Move Zeroes to end (Slow Fast)

function moveZeroes(arr) {
  let slow = 0;

  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[fast] !== 0) {
      [arr[slow], arr[fast]] = [arr[fast], arr[slow]];
      slow++;
    }
  }

  return arr;
}

console.log(moveZeroes([1, 1, 0, 1, 0, 1, 1, 0, 0]));

// 4. Duplicate Zeros (LeetCode 1089)

function duplicateZeros(arr) {
  let possibleDups = 0;
  let last = arr.length - 1;

  // Count duplicatable zeros
  for (let left = 0; left <= last - possibleDups; left++) {
    if (arr[left] === 0) {
      if (left === last - possibleDups) {
        arr[last] = 0;
        last--;
        break;
      }
      possibleDups++;
    }
  }

  let i = last - possibleDups;
  let j = last;

  while (i >= 0) {
    if (arr[i] === 0) {
      arr[j] = 0;
      j--;
      arr[j] = 0;
      j--;
    } else {
      arr[j] = arr[i];
      j--;
    }
    i--;
  }

  return arr;
}

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));

// arr = [1,0,2,3,0,4,5,0]

// Output:
// [1,0,0,2,3,0,0,4]
