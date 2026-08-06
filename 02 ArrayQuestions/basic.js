/*
1) Sum of n elements of array
2) Sum of elements in a given array
3) Largest element
4) Second largest
5) Smallest and second smallest elements in an array
6) Find Max & Min in One Pass
7) Add an element to an Array
8) Mean and median of an unsorted array
9) Third Maximum Number
10) Reverse with extra array
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

// 10) Reverse with extra array

let arr = [10, 20, 30, 40, 50];
let temp = new Array(arr.length);

let j = 0;
for (let i = arr.length - 1; i >= 0; i--) {
  temp[j] = arr[i];
  j++;
}
console.log(temp);
