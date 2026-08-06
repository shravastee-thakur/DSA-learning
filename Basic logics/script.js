// let age = prompt("What is your age");
// console.log(age);

// here output of prompt function is always string therefore to make it number

// let age = Number(prompt("What is your age")); // known as type castng
// console.log(age);

// Swapping
// method 1:
// let a = 10;
// let b = 20;
// let c;

// c = a;
// a = b;
// b = c;

// console.log("Now a is", a);
// console.log("Now b is", b);

// method 2:
// let a = 10;
// let b = 20;

// a = a + b; // a = 30
// b = a - b; // 30 - 20 = 10
// a = a - b; // 30 - 10 = 20

// console.log("Now a is", a);
// console.log("Now b is", b);

//method 3: (destructuring assignment in JavaScript)
// let a = 10;
// let b = 20;

// [a, b] = [b, a]; //Swappig values
// console.log("Now a is", a);
// console.log("Now b is", b);

// -----x-------

// Unary operator (++, --)

// let i = 11;
// i = i++ + ++i; // i = 11 + 13
// console.log(i); // ans: 24

// let a = 11; // 12
// let b = 22; // 23

// let c = a + b + a++ + b++ + ++a + ++b;
// //      11  22  11    22    13     24
// console.log("a =", a);
// console.log("b =", b);
// console.log("c =", c); // 103

// let b = true;
// b++; //1
// console.log(b); // 2

// let a = 10
// let b = ++(a++) // ++(10) cannont be applied on constant
// console.log(b); // error

// Math functions
// console.log(Math.round(10.6)); // 10.6 = 11, 10.3 = 10
// console.log(Math.ceil(10.6)); // 10.1 = 11 top value
// console.log(Math.floor(10.6)); // 10.6 = 10 bottom value
// console.log(Math.trunc(18.67)); // removes the decimal part therefore 18
// console.log(Math.pow(2, 3)); // 2^3 = 8
// console.log(Math.sqrt(4)); // square root
// console.log(Math.cbrt(8)); // cube root
// console.log(Math.abs(-5)); // absolute value of number thus = 5
// console.log(Math.min(10, 5, 20, 2)); // Output: 2
// console.log(Math.min(-5, -10, 0)); // Output: -10
// console.log(Math.max(10, 5, 20, 2)); // Output: 10
// console.log(Math.random()); // Output: random number between 0 to 1

// let num = 123.4567;
// console.log(num.toFixed(2)); // "123.46" (Rounds up)
// console.log(num.toFixed(0)); // "123"    (No decimals)
// console.log(num.toFixed(6)); // "123.456700" (Pads with zeros)

// let price = 5;
// console.log(price.toFixed(2)); // "5.00" (Great for currency display) value is in string so convert to number

// Questions
// 1. area and perimeter of rectangle
// let length = 10;
// let breadth = 5;
// let area = length * breadth;
// console.log("area =", area);

// let perimeter = 2 * length + 2 * breadth;
// console.log("perimeter =", perimeter);

// 2. circumference of circle
// let r = 5;
// let circumference = 2 * Math.PI * r;
// console.log("circumference =", circumference);

// -------- 3. Linear Search Pattern ------

// 13) Find First Index of Target

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

// 14) Check Existence (Boolean Search)

//Statement: Return true if target exists in the array, otherwise false. Stop searching the moment you find it.
//Example: exists([7, 2, 9, 4], 9) → true

function exists(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return true;
  }
  return false;
}

// 15) Find All Indices of Target

// Statement: Return an array containing every index where target appears.
// Example: findAll([4, 1, 4, 5, 4], 4) → [0, 2, 4]

function findAll(arr, target) {
  const indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) indices.push(i);
  }
  return indices;
}

// 16) First Element Matching a Condition

// Statement: Find the first number greater than a threshold k. Return the number, or null if none.
// Example: findFirstGreaterThan([2, 8, 5, 12, 3], 6) → 8
// Concept: Linear search with a custom predicate (condition) instead of exact match

function findFirstGreaterThan(arr, k) {
  for (let num of arr) {
    if (num > k) return num;
  }
  return null;
}

// 17) Count Occurrences

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

// 18) Program to check if an array is sorted or not

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

// --------- 5. Hashing / Frequency Count -------

// 19) Contains Duplicate
// A Set in JavaScript is a special object collection that can only hold unique values. When you pass an array into a new Set, it automatically filters out any duplicate items.
function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}

// 20) Counting frequencies of array elements

function countFrequencies(arr) {
  const freq = {};
  for (const num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq;
}

// 21) Majority Element
// As we loop through the array, if the count ever drops to 0, it means the previous candidate has lost all their advantage (they were cancelled out by other numbers). When this happens, the very next number we look at immediately becomes the new candidate.(if (count === 0) candidate = num)

// If (num === candidate) add 1 to count
function majorityElement(nums) {
  let count = 0,
    candidate = null;

  for (const num of nums) {
    if (count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

// 22) Sort elements by frequency

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

// 23) Intersection of Two Arrays

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

// 24) Move Zeroes

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

// 25) All zeros to left

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

// 26) Remove Duplicates from Sorted Array (In-Place)

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

// 27) Two Sum II – Input Array Is Sorted

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

// 28) Squares of a Sorted Array

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

// 29) Merge Two Sorted Arrays

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
