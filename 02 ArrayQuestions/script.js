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

// -------- 1. Basics / Traversal -------

// 1) Sum of n elements of array

function sumOfElements(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumOfElements([10, 20, 30, 40, 50]));

// 2) Sum of elements in a given array

function arraySum(arr) {
  let sum;

  sum = arr.reduce((a, b) => a + b, 0);

  return sum;
}

console.log(arraySum([10, 20, 30, 40, 50]));

// 3) Largest element

let arr = [10, 2, 78, 100, 4];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);

// 4) Second largest

let arr = [10, 30, 56, 43, 29, 64, 49, 60, 64];
let max = Math.max(arr[0], arr[1]);
let smax = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
  if (max < arr[i]) {
    smax = max;
    max = arr[i];
  } else if (smax < arr[i] && max != arr[i]) {
    smax = arr[i];
  }
}
console.log(smax);

// 5) Smallest and second smallest elements in an array

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

// 6) Find Max & Min in One Pass

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

// 7) Add an element to an Array

// Mutable (in-place):
arr.push(element); // end
arr.unshift(element); // beginning

// Immutable (new array):
const newArr = [...arr, element]; // end
const newArr2 = [element, ...arr]; // beginning

// 8) Mean and median of an unsorted array

function meanAndMedian(arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
  let mean = Math.floor(sum / arr.length);

  let sorted = [...arr].sort((a, b) => a - b);
  let mid = Math.floor(sorted.length / 2);

  let median =
    sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];

  return { mean, median };
}

console.log(meanAndMedian([5, 2, 3, 8, 3, 2, 1, 2]));
// {mean: 3, median: 2.5}

// 9) Third Maximum Number

function thirdMax(nums) {
  let first = -Infinity,
    second = -Infinity,
    third = -Infinity;

  for (const num of nums) {
    if (num === first || num === second || num === third) continue;
    // if the current num is already sitting in the 1st, 2nd, or 3rd place bucket, continue forces the loop to skip to the next number.

    if (num > first) {
      [third, second, first] = [second, first, num];
    } else if (num > second) {
      [third, second] = [second, num];
    } else if (num > third) {
      third = num;
    }
  }
  // If 'third' is still -Infinity, a third max was never found.
  // Return the 'first' max instead. Otherwise, return 'third'.
  return third === -Infinity ? first : third;
}

// ------- 2. Array Reversal / Rotation -------

// 10) Reverse with extra array

let arr = [10, 20, 30, 40, 50];
let temp = new Array(arr.length);

let j = 0;
for (let i = arr.length - 1; i >= 0; i--) {
  temp[j] = arr[i];
  j++;
}
console.log(temp);

// 11) Reverse Array In-Place

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

// 12) Reverse without extra array

let arr = [10, 20, 30, 40, 50];
let i = 0,
  j = arr.length - 1;

while (i != j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
  j--;
}

console.log(arr);

// 13) Print array after it is right rotated K times

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

// -------- 3. Linear Search Pattern ------

// 14) Find First Index of Target

//Statement: Return the index of the first occurrence of target. Return -1 if not found.
// Example: linearSearch([5, 3, 8, 3, 2], 3) → 1
// Concept: Sequential scan + early return

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([5, 2, 3, 8, 3, 2], 2));

// 15) Check Existence (Boolean Search)

//Statement: Return true if target exists in the array, otherwise false. Stop searching the moment you find it.
//Example: exists([7, 2, 9, 4], 9) → true

function exists(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return true;
  }
  return false;
}

// 16) Find All Indices of Target

// Statement: Return an array containing every index where target appears.
// Example: findAll([4, 1, 4, 5, 4], 4) → [0, 2, 4]

function findAll(arr, target) {
  const indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) indices.push(i);
  }
  return indices;
}

// 17) First Element Matching a Condition

// Statement: Find the first number greater than a threshold k. Return the number, or null if none.
// Example: findFirstGreaterThan([2, 8, 5, 12, 3], 6) → 8
// Concept: Linear search with a custom predicate (condition) instead of exact match

function findFirstGreaterThan(arr, k) {
  for (let num of arr) {
    if (num > k) return num;
  }
  return null;
}

// 18) Count Occurrences

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

// ------- 4. Sorting / Order Checking -------

// 19) Program to check if an array is sorted or not

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

// --------- 5. Hashing / Frequency Count -------

// 20) Contains Duplicate
// A Set in JavaScript is a special object collection that can only hold unique values. When you pass an array into a new Set, it automatically filters out any duplicate items.
function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}

// 21) Counting frequencies of array elements

function countFrequencies(arr) {
  const freq = {};
  for (const num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq;
}

// 22) Majority Element

function majorityElement(nums) {
  let count = 0,
    candidate = null;

  for (const num of nums) {
    if (count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

// 23) Sort elements by frequency

function sortByFrequency(arr) {
  const freq = {};
  for (const num of arr) freq[num] = (freq[num] || 0) + 1;

  return arr.sort((a, b) => {
    if (freq[b] === freq[a]) return a - b;
    // If two numbers have the exact same frequency, sort them by their actual numeric value in ascending order (smallest to largest).
    return freq[b] - freq[a];
    // If the frequencies are different, sort them by frequency in descending order (most frequent to least frequent).
  });
}

console.log(sortByFrequency([2, 2, 5, 5, 5, 6, 7, 1, 2, 2]));

// 24) Intersection of Two Arrays

function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const result = [];

  for (const num of set1) {
    if (set2.has(num)) result.push(num);
  }

  return result;
}
console.log(intersection([2, 2, 5, 5, 5, 6, 7, 1, 2, 2], [1, 2, 3, 4, 5]));
// -------- 6. Two Pointer Pattern ---------

// 25) Move Zeroes

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

// 26) All zeros to left

let arr = [1, 1, 0, 1, 0, 1, 1, 0, 0];

let i = 0,
  j = 0;

while (i < arr.length) {
  if (arr[i] == 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
  i++;
}

console.log(arr);

// 27) Remove Duplicates from Sorted Array (In-Place)

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

// 28) Two Sum II – Input Array Is Sorted

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

// 29) Squares of a Sorted Array

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

// 30) Merge Two Sorted Arrays

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
