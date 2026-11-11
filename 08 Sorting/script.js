/*----------Easy------------

1. (88)	Merge Sorted Array ✅ (Two pointers)

2. (242)	Valid Anagram 
Sorting as a comparison technique

3. (268)	Missing Number 
Sorting-based solution and alternatives

4. (350)	Intersection of Two Arrays II ✅ (Two pointers)

5. (977)	Squares of a Sorted Array ✅ (Two pointers)

6. (1122)	Relative Sort Array	
Custom ordering

7. (1356)	Sort Integers by The Number of 1 Bits	
Custom comparator

8. (1636)	Sort Array by Increasing Frequency	
Frequency map + comparator


*/

/*-----------Medium-----------

(75)	Sort Colors ✅ (Two pointers)

(56)	Merge Intervals ✅
Sorting + interval processing

(148)	Sort List ✅
Merge Sort on a linked list

(912)	Sort an Array ✅
Implement Merge Sort or Quick Sort

(179)	Largest Number ✅
Custom comparator

(324)	Wiggle Sort II ✅
Sorting + rearrangement

*/

// 2. (242)	Valid Anagram
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const counts = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - 97]++;
    counts[t.charCodeAt(i) - 97]--;
  }

  for (let count of counts) {
    if (count !== 0) return false;
  }

  return true;
}
console.log("Test 1:", isAnagram("anagram", "nagaram"));
// Expected: true (Standardized string: "aaagmnr")

// 3. (268)	Missing Number
/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumberSort(nums) {
  // 1. Sort the numbers from smallest to largest
  nums.sort((a, b) => a - b);

  // 2. Walk down the line. The position index should match the number!
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i; // We found the mismatch!
    }
  }

  // 3. Edge case: If all numbers matched their positions (e.g., [0, 1, 2]),
  // the missing number must be the very last one (3).
  return nums.length;
}

// 6. (1122)	Relative Sort Array
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function relativeSortArray(arr1, arr2) {
  // 1. Create the VIP Logbook (Hash Map) to store everyone's rank
  let rankMap = new Map();
  for (let i = 0; i < arr2.length; i++) {
    rankMap.set(arr2[i], i);
  }

  // 2. Sort the crowd using our custom rules
  arr1.sort((a, b) => {
    // Look up both people in the logbook.
    // If they aren't in it, give them a rank of Infinity.
    let rankA = rankMap.has(a) ? rankMap.get(a) : Infinity;
    let rankB = rankMap.has(b) ? rankMap.get(b) : Infinity;

    if (rankA !== rankB) {
      // Rule 1: One person has a better VIP rank.
      // (e.g., if rankA is 0 and rankB is Infinity, 0 - Infinity is negative, so 'a' wins)
      return rankA - rankB;
    } else {
      // Rule 2: They are both "Nobodies" (rank Infinity === rank Infinity).
      // Sort them in normal ascending order.
      return a - b;
    }
  });

  return arr1;
}

let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
let arr2 = [2, 1, 4, 3, 9, 6];
console.log("Test 1:", relativeSortArray(arr1, arr2));
// Expected: [2,2,2,1,4,3,3,9,6,7,19]

// 7. (1356)	Sort Integers by The Number of 1 Bits
/**
 * @param {number[]} arr
 * @return {number[]}
 */
function sortByBits(arr) {
  // Helper function: The "Scale" to weigh our numbers
  const getWeight = (num) => {
    // Example: 5 -> toString(2) becomes "101"
    // .replace(/0/g, '') removes all zeros -> "11"
    // .length gives us 2!
    return num.toString(2).replace(/0/g, "").length;
  };

  // Sort the array using our two rules
  arr.sort((a, b) => {
    let weightA = getWeight(a);
    let weightB = getWeight(b);

    if (weightA !== weightB) {
      // Rule 1: Sort by weight class (number of 1 bits)
      return weightA - weightB;
    } else {
      // Rule 2: Tie-breaker! Sort by actual decimal value
      return a - b;
    }
  });

  return arr;
}

console.log("Test 1:", sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
// Expected: [0,1,2,4,8,3,5,6,7]
// Breakdown:
// 0 bits: 0
// 1 bit: 1, 2, 4, 8
// 2 bits: 3, 5, 6
// 3 bits: 7

// 8. (1636)	Sort Array by Increasing Frequency
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  // 1. Build the Popularity Logbook (Frequency Map)
  let freqMap = new Map();
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // 2. Sort the array using our two rules
  nums.sort((a, b) => {
    let freqA = freqMap.get(a);
    let freqB = freqMap.get(b);

    if (freqA !== freqB) {
      // Rule 1: Sort by increasing frequency (smallest frequency goes first)
      return freqA - freqB;
    } else {
      // Rule 2: Tie-breaker! Sort by decreasing value (largest number goes first)
      return b - a;
    }
  });

  return nums;
};

console.log("Test 1:", frequencySort([1, 1, 2, 2, 2, 3]));
// Expected: [3,1,1,2,2,2]
// (3 appears once, 1 appears twice, 2 appears three times)

/*----------------------------
-----------Medium-----------
----------------------------*/

// 1. (56)	Merge Intervals
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  if (intervals.length === 0) return [];

  // 1. Sort all intervals strictly by their START time
  intervals.sort((a, b) => a[0] - b[0]);

  // 2. Create our result array and put the first block in it
  let result = [intervals[0]];

  // 3. Walk through the rest of the schedule
  for (let i = 1; i < intervals.length; i++) {
    // Look at the block we are currently building
    let currentActiveBlock = result[result.length - 1];

    // Look at the next meeting on the schedule
    let nextMeeting = intervals[i];

    // Does the next meeting start before (or exactly when) our current block ends?
    if (nextMeeting[0] <= currentActiveBlock[1]) {
      // Overlap! Extend the end time of our current block.
      currentActiveBlock[1] = Math.max(currentActiveBlock[1], nextMeeting[1]);
    } else {
      // No overlap! The current block is finished.
      // Add the next meeting as a brand new block.
      result.push(nextMeeting);
    }
  }

  return result;
}

// 2. (148)	Sort List
// Helper 1: Find the middle using Fast & Slow pointers
const getMid = (head) => {
  let slow = head;
  let fast = head.next; // Fast starts one step ahead so slow lands on the exact end of the left half

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// Helper 2: The "Zip" function (Exactly like merging two sorted arrays)
const merge = (list1, list2) => {
  let dummy = new ListNode(0); // A fake node to hold our zipped list
  let tail = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  // If one list runs out before the other, just attach the rest of the remaining list!
  if (list1 !== null) tail.next = list1;
  if (list2 !== null) tail.next = list2;

  return dummy.next; // Return the real start of the list, skipping the dummy
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  // Base Case: If the chain is empty or just 1 link long, it's already sorted!
  if (head === null || head.next === null) {
    return head;
  }

  // 1. DIVIDE: Find the middle and tear the chain in two
  let left = head;
  let mid = getMid(head);
  let right = mid.next; // The start of the right half
  mid.next = null; // Physically tear the connection between left and right!

  // 2. RECURSION: Keep tearing the left and right halves down to 1-link chains
  left = sortList(left);
  right = sortList(right);

  // 3. CONQUER: Zip the sorted halves back together and return them up the chain
  return merge(left, right);
};

// ---------------(another way)--------------------

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) return head;

  // 1. Find the total length of the linked list
  let length = 0;
  let curr = head;
  while (curr !== null) {
    length++;
    curr = curr.next;
  }

  let dummy = new ListNode(0);
  dummy.next = head;

  // 2. Bottom-Up Merge: Double the sub-list size each time (1, 2, 4, 8...)
  for (let step = 1; step < length; step *= 2) {
    let tail = dummy; // Tracks the end of our newly merged list
    let current = dummy.next; // Tracks our progress through the unsorted list

    while (current !== null) {
      // Snip out the left sub-list of size 'step'
      let left = current;
      let right = split(left, step);

      // Snip out the right sub-list of size 'step',
      // and save whatever is left over as our starting point for the next loop
      current = split(right, step);

      // Merge the two snipped lists and attach them to our growing sorted list
      tail.next = merge(left, right);

      // Move our tail pointer to the very end of the newly attached segment
      while (tail.next !== null) {
        tail = tail.next;
      }
    }
  }

  return dummy.next;
};

// Helper 1: Snip the list after 'step' nodes and return the start of the remaining list
const split = (start, step) => {
  if (start === null) return null;

  // Move forward 'step' times (or until we hit the end of the list)
  for (let i = 1; i < step && start.next !== null; i++) {
    start = start.next;
  }

  // Break the physical connection to separate the chains
  let rightHalf = start.next;
  start.next = null;

  return rightHalf;
};

// Helper 2: The exact same Zip function from before!
const merge = (list1, list2) => {
  let dummy = new ListNode(0);
  let tail = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  if (list1 !== null) tail.next = list1;
  if (list2 !== null) tail.next = list2;

  return dummy.next;
};

// 3. (912)	Sort an Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // Our "Spare Table" - allocated exactly once to save memory
  let temp = new Array(nums.length);

  // The main recursive function using "Invisible Fences" (left and right indices)
  const mergeSort = (left, right) => {
    // Base Case: If the fence only contains 1 card, it's already sorted!
    if (left >= right) return;

    let mid = Math.floor((left + right) / 2);

    // 1. DIVIDE: Recursively sort the left and right halves
    mergeSort(left, mid);
    mergeSort(mid + 1, right);

    // 2. CONQUER: Merge the two sorted halves
    merge(left, mid, right);
  };

  // The helper function that actually does the zipping
  const merge = (left, mid, right) => {
    let i = left; // Pointer for the left half
    let j = mid + 1; // Pointer for the right half
    let k = left; // Pointer for our Spare Table (temp array)

    // Pick the smaller number from the left or right half
    while (i <= mid && j <= right) {
      if (nums[i] <= nums[j]) {
        temp[k++] = nums[i++];
      } else {
        temp[k++] = nums[j++];
      }
    }

    // If the right half ran out first, dump the rest of the left half
    while (i <= mid) {
      temp[k++] = nums[i++];
    }

    // If the left half ran out first, dump the rest of the right half
    while (j <= right) {
      temp[k++] = nums[j++];
    }

    // Scoop the perfectly sorted numbers off the Spare Table
    // and put them back into the original array
    for (let p = left; p <= right; p++) {
      nums[p] = temp[p];
    }
  };

  // Kick off the sorting process on the entire array bounds
  mergeSort(0, nums.length - 1);

  return nums;
};
console.log("Test 2:", sortArray([5, 1, 1, 2, 0, 0]));
// Expected: [0, 0, 1, 1, 2, 5] (Handles duplicates flawlessly!)

// 4. (179)	Largest Number
/**
 * @param {number[]} nums
 * @return {string}
 */
function largestNumber(nums) {
  // 1. Convert all numbers to strings so we can "glue" them together
  let strNums = nums.map(String);

  // 2. Sort using our custom "Glue Test"
  strNums.sort((a, b) => {
    let order1 = a + b; // e.g., "3" + "30" = "330"
    let order2 = b + a; // e.g., "30" + "3" = "303"

    // We want the largest combinations first (descending order).
    // If order2 is larger than order1, we return 1 to put 'b' in front of 'a'.
    if (order2 > order1) {
      return 1;
    } else if (order2 < order1) {
      return -1;
    } else {
      return 0;
    }
  });

  // 3. Trap Case: What if the array was just [0, 0]?
  // It would sort to ["0", "0"] and join as "00".
  // If the largest number at the very front is "0", the whole number is just "0".
  if (strNums[0] === "0") {
    return "0";
  }

  // 4. Glue the perfectly sorted array into one giant string
  return strNums.join("");
}

console.log("Test 1:", largestNumber([10, 2]));
// Expected: "210"

// 5. (324)	Wiggle Sort II
function wiggleSort(nums) {
  let sorted = nums.slice().sort((a, b) => a - b);

  let n = nums.length;

  let left = Math.floor((n - 1) / 2);
  let right = n - 1;

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      nums[i] = sorted[left];
      left--;
    } else {
      nums[i] = sorted[right];
      right--;
    }
  }
}

let nums2 = [1, 3, 2, 2, 3, 1];
wiggleSort(nums2);
console.log("Test 2:", nums2);
// Expected: [2, 3, 1, 3, 1, 2]
// (Notice how pulling from the back ensures the 2s don't touch!)
