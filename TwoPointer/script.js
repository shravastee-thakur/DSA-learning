/*Two pointer questions - Array
1. Two Sum II - Input Array Is Sorted
2. Squares of a Sorted Array
3. Valid Palindrome
4. Reverse String
5. Merge Sorted Array
6. Is Subsequence (LeetCode 392)
7. DI String Match (LeetCode 942)
8. Container With Most Water
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

// 6. Is Subsequence (LeetCode 392)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
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
};

// 7. DI String Match (LeetCode 942)
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
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
};
