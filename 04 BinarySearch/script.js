/**
 * 1. BINARY SEARCH (Find target in sorted array)
 * Logic: Set two pointers at the ends. Find the middle.
 * If the middle is too small, move the left pointer up.
 * If it's too big, move the right pointer down.
 * Time: O(log n) | Space: O(1)
 */

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Math.floor is crucial so we don't get decimal indices
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1; // Target is on the right side
    if (arr[mid] > target) right = mid - 1; // Target is on the left side
  }
  return -1; // Not found
}
console.log("1. Binary Search:", binarySearch([2, 4, 6, 8, 10, 12], 8)); // 3

/**
 * 2. FIND FIRST OCCURRENCE OF ELEMENT
 * Logic: When you find the target, don't stop! Record the index,
 * but keep searching the LEFT side to see if an earlier one exists.
 */

function findFirstOccurrence(arr, target) {
  let left = 0,
    right = arr.length - 1;
  let firstIndex = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      firstIndex = mid; // Record it
      right = mid - 1; // Keep looking LEFT for an earlier one
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return firstIndex;
}
console.log(
  "2. First Occurrence:",
  findFirstOccurrence([2, 4, 8, 8, 8, 10], 8),
); // 2

/**
 * 3. FIND LAST OCCURRENCE OF ELEMENT
 * Logic: When you find the target, record it, but keep
 * searching the RIGHT side to see if a later one exists.
 */

function findLastOccurrence(arr, target) {
  let left = 0,
    right = arr.length - 1;
  let lastIndex = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      lastIndex = mid; // Record it
      left = mid + 1; // Keep looking RIGHT for a later one
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return lastIndex;
}
console.log("3. Last Occurrence:", findLastOccurrence([2, 4, 8, 8, 8, 10], 8)); // 4

/**
 * 4. FIND FIRST AND LAST POSITION IN SORTED ARRAY
 * Logic: Just combine the two functions we already wrote!
 * (This is LeetCode #34, technically marked Medium, but conceptually Easy).
 */

function searchRange(arr, target) {
  const first = findFirstOccurrence(arr, target);
  // Optimization: If it doesn't exist at all, skip the second search
  if (first === -1) return [-1, -1];

  const last = findLastOccurrence(arr, target);
  return [first, last];
}
console.log("4. First and Last:", searchRange([2, 4, 8, 8, 8, 10], 8)); // [2, 4]

/**
 * 5. CHECK IF ELEMENT EXISTS (BOOLEAN SEARCH)
 * Logic: Call our standard binary search. If it returns anything
 * other than -1, the element exists.
 */

function existsInArray(arr, target) {
  return binarySearch(arr, target) !== -1;
}
console.log("5. Exists (Boolean):", existsInArray([2, 4, 6, 8, 10], 6)); // true

/**
 * 6. SEARCH INSERT POSITION (LeetCode 35)
 * Problem: Find target. If it's not there, return the index where it *should* be inserted.
 * Logic: If the loop finishes without finding the target, 'left' naturally
 * rests exactly where the target *should* be.
 */

function searchInsert(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return left; // 'left' is the insertion index!
}
console.log("6. Search Insert:", searchInsert([1, 3, 5, 6], 2)); // 1 (Between 1 and 3)

/**
 * 7. COUNT OCCURRENCES OF AN ELEMENT
 * Problem: Find how many times a number appears in a sorted array.
 * Logic: Last occurrence index minus First occurrence index + 1.
 */
function countOccurrences(arr, target) {
  const first = findFirstOccurrence(arr, target);
  if (first === -1) return 0; // Doesn't exist

  const last = findLastOccurrence(arr, target);
  return last - first + 1;
}
console.log("7. Count Occurrences:", countOccurrences([2, 2, 8, 8, 8, 10], 8)); // 3

/**
 * 8. FIND SMALLEST LETTER GREATER THAN TARGET (LeetCode 744)
 * Problem: Given an array of letters, find the smallest one strictly greater than target.
 * Logic: Similar to First Occurrence, but we are looking for > target.
 */
function nextGreatestLetter(letters, target) {
  let left = 0,
    right = letters.length - 1;
  let result = letters[0]; // Letters wrap around (like a circle) if no larger letter exists

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (letters[mid] > target) {
      result = letters[mid];
      right = mid - 1; // Keep looking left for a *smaller* larger letter
    } else {
      left = mid + 1;
    }
  }
  return result;
}
console.log(
  "8. Next Greatest Letter:",
  nextGreatestLetter(["c", "f", "j"], "c"),
); // 'f'

/**
 * 9. PEAK INDEX IN A MOUNTAIN ARRAY (LeetCode 852)
 * Problem: Array goes up, then goes down. Find the peak (highest number).
 * Logic: Compare mid to the number right next to it.
 * If mid < mid+1, you are walking UP the mountain (peak is to the right).
 * If mid > mid+1, you are walking DOWN the mountain (peak is to the left).
 */
function peakIndexInMountainArray(arr) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    // Notice it's strictly <
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1; // Walk up
    } else {
      right = mid; // Walk down (mid might BE the peak, so don't do mid-1)
    }
  }
  return left; // left and right will eventually converge on the peak
}
console.log("9. Peak Index:", peakIndexInMountainArray([0, 1, 5, 10, 3, 2])); // 3 (Value: 10)

/**
 * 10. SQUARE ROOT USING BINARY SEARCH (LeetCode 69)
 * Problem: Find the floor of the square root of 'x' without built-in functions.
 * Logic: The square root of x must be between 1 and x. Binary search that range!
 */

function mySqrt(x) {
  if (x === 0 || x === 1) return x;

  let left = 1,
    right = x;
  let result = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (square === x) return mid; // Perfect square

    if (square < x) {
      result = mid; // Record highest possible floor value
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}
console.log("10. Square Root Floor:", mySqrt(10)); // 3 (Since 3*3=9, 4*4=16)
