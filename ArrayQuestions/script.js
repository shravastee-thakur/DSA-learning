// let arr = new Array(5);

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt("Enter"));
// }
// console.log(arr);

// 1.
// Sum of n elements of array       Time O(n) Space O(1)
// let arr = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// 2.
// Largest element
// let arr = [10, 2, 78, 100, 4];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// 3.
// Second largest     Time O(n) Space O(1)
// let arr = [10, 30, 56, 43, 29, 64, 49, 60, 64];
// let max = Math.max(arr[0], arr[1]);
// let smax = Math.min(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//   if (max < arr[i]) {
//     smax = max;
//     max = arr[i];
//   } else if (smax < arr[i] && max != arr[i]) {
//     smax = arr[i];
//   }
// }
// console.log(smax);

// 4.
// Reverse with extra array
// let arr = [10, 20, 30, 40, 50];
// let temp = new Array(arr.length);

// let j = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   temp[j] = arr[i];
//   j++;
// }
// console.log(temp);

// 5.
// Find Max & Min in One Pass    Time O(n) Space O(1)
//Concept: Single-pass tracking

function findMinMax(arr) {
  if (arr.length === 0) return null;
  let min = arr[0],
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  return { min, max };
}

// 6.
//Reverse Array In-Place     Time O(n) Space O(1)
//Concept: Two pointers, swap

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

// 7.
//Contains Duplicate      Time O(n) Space O(n)
//Concept: Frequency tracking / Set

function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}

// 8.
// Remove Duplicates from Sorted Array (In-Place)     Time O(n) Space O(1)
// Example: [1, 1, 2, 2, 3] → returns 3, array becomes [1, 2, 3, _, _]
// Concept: Two pointers (slow/fast)

function removeDuplicates(arr) {
  if (arr.length === 0) return 0;
  let slow = 0;
  for (let fast = 1; fast < arr.length; fast++) {
    if (arr[fast] !== arr[slow]) {
      slow++;
      arr[slow] = arr[fast];
    }
  }
  return slow + 1; // new length
}

//Linear Search - Linear search is the simplest searching algorithm: check each element one by one until you find what you're looking for or reach the end.

//  Q9: Find First Index of Target       Time O(n) Space O(1)
//Statement: Return the index of the first occurrence of target. Return -1 if not found.
// Example: linearSearch([5, 3, 8, 3, 2], 3) → 1
// Concept: Sequential scan + early return

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i; // Found! Exit immediately
  }
  return -1; // Not found after full scan
}

// Q10: Check Existence (Boolean Search)    Time O(n) Space O(1)
//Statement: Return true if target exists in the array, otherwise false. Stop searching the moment you find it.
//Example: exists([7, 2, 9, 4], 9) → true

function exists(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return true;
  }
  return false;
}

// Q11: Find All Indices of Target      Time O(n) Space O(k) (k = number of matches)
// Statement: Return an array containing every index where target appears.
// Example: findAll([4, 1, 4, 5, 4], 4) → [0, 2, 4]

function findAll(arr, target) {
  const indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) indices.push(i);
  }
  return indices;
}

// Q12: First Element Matching a Condition      Time O(n) Space O(1)
// Statement: Find the first number greater than a threshold k. Return the number, or null if none.
// Example: findFirstGreaterThan([2, 8, 5, 12, 3], 6) → 8
// Concept: Linear search with a custom predicate (condition) instead of exact match

function findFirstGreaterThan(arr, k) {
  for (let num of arr) {
    if (num > k) return num;
  }
  return null;
}

// Q13: Count Occurrences       Time O(n) Space O(1)
// Statement: Count how many times target appears in the array.
// Example: countOccurrences([1, 2, 1, 3, 1, 4], 1) → 3
// Concept: Full scan + accumulator variable

function countOccurrences(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) count++;
  }
  return count;
}

// Two Pointers

// 14.
// Reverse without extra array
// let arr = [10, 20, 30, 40, 50];
// let i = 0,
//   j = arr.length - 1;

// while (i != j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }

// console.log(arr);

// 15.
// All zeros to left
// let arr = [1, 1, 0, 1, 0, 1, 1, 0, 0];

// let i = 0,
//   j = 0;

// while (i < arr.length) {
//   if (arr[i] == 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
//   i++;
// }

// console.log(arr);

// 16.
// Two Sum II – Input Array Is Sorted (Opposite Pointers)    Time O(n) Space O(1)
// Statement: Given a sorted array and a target, find two numbers that add up to target. Return their 0-based indices. Exactly one solution exists.
// Example: [2, 7, 11, 15], target 9 → [0, 1]

function twoSumSorted(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    else if (sum < target)
      left++; // Need larger sum
    else right--; // Need smaller sum
  }
  return []; // Shouldn't reach here per problem constraints
}

// 17.
// Squares of a Sorted Array (Opposite Pointers + Fill Backwards)     Time O(n) Space O(n)
// Statement: Given an array sorted in non-decreasing order (may contain negatives), return a new array of their squares, also sorted.
// Example: [-4, -1, 0, 3, 10] → [0, 1, 9, 16, 100]

function sortedSquares(arr) {
  const n = arr.length;
  const result = new Array(n);
  let left = 0,
    right = n - 1;
  let pos = n - 1; // Fill from back to front

  while (left <= right) {
    const leftSq = arr[left] ** 2;
    const rightSq = arr[right] ** 2;
    if (leftSq > rightSq) {
      result[pos] = leftSq;
      left++;
    } else {
      result[pos] = rightSq;
      right--;
    }
    pos--;
  }
  return result;
}

// 18.
// Merge Two Sorted Arrays (Opposite Pointers, In-Place from Back)   Time O(m + n) Space O(n)
// Statement: nums1 has size m + n. First m elements are valid, last n are 0. nums2 has n elements. Merge nums2 into nums1 in sorted order.
// Example: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 → [1,2,2,3,5,6]

function mergeSortedArray(nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
  // If nums2 still has elements, copy them
  while (j >= 0) nums1[k--] = nums2[j--];
}

// Accenture - basic questions

/*
Easy
Program to check if an array is sorted or not
Sum of elements in a given array
Add an element to an Array
Move Zeroes
Contains Duplicate
Counting frequencies of array elements
Single Number
Smallest and second smallest elements in an array
Mean and median of an unsorted array


Medium
Two Sum
Pascal's Triangle
Third Maximum Number
Print array after it is right rotated K times
Intersection of Two Arrays
Find Peak Element
Longest Continuous Increasing Subsequence
Next Greater Element I
Majority Element
Sort elements by frequency*/

//Two Sum

// Time: O(n), Space: O(n)
function twoSum(nums, target) {
  const map = new Map(); // value -> index
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

// Program to check if an array is sorted or not

// Time: O(n), Space: O(1)
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

//Sum of elements in a given array

// Time: O(n), Space: O(1)
function arraySum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

//Pascal's Triangle

// Time: O(n²), Space: O(n²) for output
function generatePascalTriangle(numRows) {
  const triangle = [];
  for (let i = 0; i < numRows; i++) {
    triangle[i] = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
  }
  return triangle;
}

// Counting frequencies of array elements

// Time: O(n), Space: O(n)
function countFrequencies(arr) {
  const freq = {};
  for (const num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq;
}

// Move Zeroes

// Time: O(n), Space: O(1)
function moveZeroes(nums) {
  let lastNonZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[lastNonZero], nums[i]] = [nums[i], nums[lastNonZero]];
      lastNonZero++;
    }
  }
  return nums;
}

// Add an element to an Array

// Mutable (in-place):
arr.push(element); // end
arr.unshift(element); // beginning

// Immutable (new array):
const newArr = [...arr, element]; // end
const newArr2 = [element, ...arr]; // beginning

/// Contains Duplicate

// Time: O(n), Space: O(n)
function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}

// Find duplicates in O(n) time and O(1) extra space
// Assumes array contains integers from 1 to n, and you can modify the array.

// Time: O(n), Space: O(1)
function findDuplicates(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      result.push(Math.abs(nums[i]));
    } else {
      nums[index] = -nums[index];
    }
  }
  // Optional: restore array
  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.abs(nums[i]);
  }
  return result;
}

// Print array after it is right rotated K times

// Time: O(n), Space: O(1) using reverse method
function rotateRight(arr, k) {
  k = k % arr.length;
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  return arr;
}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

// Single Number
// Time: O(n), Space: O(1) using XOR
function singleNumber(nums) {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
}

// Mean and median of an unsorted array

// Time: O(n log n) due to sorting for median, Space: O(1) or O(n) if sorting creates copy
function meanAndMedian(arr) {
  if (arr.length === 0) return { mean: null, median: null };

  // Mean
  const sum = arr.reduce((a, b) => a + b, 0);
  const mean = sum / arr.length;

  // Median
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  const median =
    sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];

  return { mean, median };
}

// Smallest and second smallest elements in an array

// Time: O(n), Space: O(1)
function findTwoSmallest(arr) {
  if (arr.length < 2) return null;
  let smallest = Math.min(arr[0], arr[1]);
  let second = Math.max(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] < smallest) {
      second = smallest;
      smallest = arr[i];
    } else if (arr[i] < second && arr[i] !== smallest) {
      second = arr[i];
    }
  }
  return { smallest, second };
}

// Third Maximum Number

// Time: O(n), Space: O(1)
function thirdMax(nums) {
  let first = -Infinity,
    second = -Infinity,
    third = -Infinity;

  for (const num of nums) {
    if (num === first || num === second || num === third) continue;

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

// Sort elements by frequency

// Time: O(n log n), Space: O(n)
function sortByFrequency(arr) {
  const freq = {};
  for (const num of arr) freq[num] = (freq[num] || 0) + 1;

  return arr.sort((a, b) => {
    if (freq[b] === freq[a]) return a - b; // secondary sort by value
    return freq[b] - freq[a];
  });
}

// Majority Element

// Time: O(n), Space: O(1) - Boyer-Moore Voting Algorithm
function majorityElement(nums) {
  let count = 0,
    candidate = null;

  for (const num of nums) {
    if (count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

// Intersection of Two Arrays

// Time: O(m + n), Space: O(m + n)
function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const result = [];

  for (const num of set1) {
    if (set2.has(num)) result.push(num);
  }

  return result;
}

// (Binary Search)
//Find Peak Element

// Time: O(log n), Space: O(1)
function findPeakElement(nums) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid + 1]) {
      right = mid; // peak is on the left (including mid)
    } else {
      left = mid + 1; // peak is on the right
    }
  }
  return left; // or nums[left] for value
}

/*
Key Patterns to Remember:

Hash Maps/Sets: For O(1) lookups (Two Sum, Contains Duplicate, Frequencies)
Two Pointers: In-place operations (Reverse, Move Zeroes, Rotate)
XOR Trick: For finding unique elements (Single Number)
Boyer-Moore: For majority element in O(1) space
Stack: For next greater element problems
Binary Search: For peak finding in O(log n)
Index Marking: For O(1) space duplicate detection (when constraints allow)
*/
