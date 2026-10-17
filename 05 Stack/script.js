// Phase 1: Basic Stack

/*-------EASY------
1) Valid Parentheses (20)
2) Baseball Game (682)
3) Remove All Adjacent Duplicates in String (1047)

Phase 2: Stack for String Processing
4) Backspace String Compare (844)
5) Make The String Great (1544)

Phase 3: Monotonic Stack
6) Next Greater Element I (496)
7) Final Prices With a Special Discount in a Shop (1475)
*/

/*------- MEDIUM --------

739. Daily Temperatures
503. Next Greater Element II
901. Online Stock Span
155. Min Stack
394. Decode String
150. Evaluate Reverse Polish Notation
71. Simplify Path
*/

// 1) Valid Parentheses (20)
// Input: "{ [ ] }"
/**
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  if (s.length % 2 !== 0) return false;

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === "(") {
      stack.push(")");
    } else if (char === "{") {
      stack.push("}");
    } else if (char === "[") {
      stack.push("]");
    } else if (stack.length === 0 || stack.pop() !== char) {
      return false;
    }
  }
  return stack.length === 0;
}
// console.log("Test 1: '()[]{}' ->", isValid("()[]{}")); --> true
// console.log("Test 2: '(]' ->", isValid("(]")); --> false

// 2) Baseball Game (682)
// Input : ["5","2","C","D","+"], Output: 30
/**
 * @param {string[]} operations
 * @return {number}
 */
function calPoints(operations) {
  let stack = [];

  for (let i = 0; i < operations.length; i++) {
    let op = operations[i];

    if (op === "+") {
      // Grab the last two scores and add them
      let top1 = stack[stack.length - 1];
      let top2 = stack[stack.length - 2];
      stack.push(top1 + top2);
    } else if (op === "D") {
      // Double the last score
      let top = stack[stack.length - 1];
      stack.push(top * 2);
    } else if (op === "C") {
      // Invalidate/remove the last score
      stack.pop();
    } else {
      // It's a number. Convert the string to an integer and push it
      stack.push(Number(op));
    }
  }

  // Sum up all the valid scores left in the stack
  return stack.reduce((sum, current) => sum + current, 0);
}
console.log("Test Output:", calPoints(["5", "2", "C", "D", "+"]));

// 3) Remove All Adjacent Duplicates in String (1047)
// Input = "abbaca"   Output: "ca"
function removeDuplicates(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join(" ");
}
console.log("Test Output:", removeDuplicates("abbaca"));

// 4) Backspace String Compare (844)
function backspaceCompare(s, t) {
  const processString = function (str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
      let char = str[i];

      if (char === "#") {
        stack.pop();
      } else {
        stack.push(char);
      }
    }

    return stack.join("");
  };

  return processString(s) === processString(t);
}
console.log("Test Output:", backspaceCompare("ab#c", "ad#c"));
// Expected: true (both become "ac")

// 5) Make The String Great (1544)
Input = "leEeetcode";
Result: "leetcode";
/**
 * @param {string} s
 * @return {string}
 */
function makeGood(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    // If stack is not empty, check if the top item and current char are a bad pair
    if (
      stack.length > 0 &&
      Math.abs(stack[stack.length - 1].charCodeAt(0) - char.charCodeAt(0)) ===
        32
    ) {
      stack.pop(); // They are a bad pair (e.g., 'a' and 'A'). Crush them!
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}
console.log("Test Output:", makeGood("leEeetcode"));

// 6) Next Greater Element I (496)
// Input: nums1 = [4, 1, 2] and nums2 = [1, 3, 4, 2]
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement(nums1, nums2) {
  let nextGreaterMap = new Map(); // Stores { number: its next greater element }
  let stack = []; // A decreasing monotonic stack

  // 1. Find the next greater element for EVERY number in nums2
  for (let i = 0; i < nums2.length; i++) {
    let current = nums2[i];

    // While the stack isn't empty AND the current number is BIGGER than the top of the stack
    while (stack.length > 0 && current > stack[stack.length - 1]) {
      let smallerNum = stack.pop(); // The top number finally found someone bigger!
      nextGreaterMap.set(smallerNum, current); // Record the answer in our map
    }

    // Push the current number onto the stack to wait for its own next greater element
    stack.push(current);
  }

  // 2. Build the result array for nums1
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    let num = nums1[i];
    if (nextGreaterMap.has(num)) {
      result.push(nextGreaterMap.get(num));
    } else {
      result.push(-1); // If it's not in the map, it never found a greater element
    }
  }

  return result;
}
console.log("Test 1 Output:", nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
// Expected: [-1, 3, -1]

// 7) Final Prices With a Special Discount in a Shop (1475)
/**
 * @param {number[]} prices
 * @return {number[]}
 */
function finalPrices(prices) {
  // 1. Create our final array, starting with the original prices
  let result = [...prices];

  // 2. The waiting room. We will store INDICES here, not the prices themselves.
  let stack = [];

  for (let i = 0; i < prices.length; i++) {
    let currentPrice = prices[i];

    // 3. While the stack has people AND the current price is a valid discount
    // (<= the price of the person at the top of the stack)
    while (
      stack.length > 0 &&
      currentPrice <= prices[stack[stack.length - 1]]
    ) {
      let waitingIndex = stack.pop(); // The person at the door gets a discount!

      // Apply the discount to their price tag
      result[waitingIndex] = result[waitingIndex] - currentPrice;
    }

    // 4. The current person gets in line to wait for their own discount
    stack.push(i);
  }

  return result;
}
console.log("Test :", finalPrices([8, 4, 6, 2, 3]));
// Expected: [4,2,4,2,3]

// ------- MEDIUM --------

// 739. Daily Temperatures
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// temperatures = [73, 74, 75, 71, 69, 72]
function dailyTemperatures(temperatures) {
  // 1. Initialize an array of 0s, the exact same length as our input
  let result = new Array(temperatures.length).fill(0);

  // 2. The stack will only store INDICES (the day numbers)
  let stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    let currentTemp = temperatures[i];

    // 3. While the stack has waiting days AND today is warmer than the top waiting day
    while (
      stack.length > 0 &&
      currentTemp > temperatures[stack[stack.length - 1]]
    ) {
      // Someone finally gets a warmer day! Pop them out.
      let waitingDayIndex = stack.pop();

      // Calculate how long they waited
      let daysWaited = i - waitingDayIndex;

      // Record the wait time in our result array
      result[waitingDayIndex] = daysWaited;
    }

    // 4. Today gets in line to wait for a warmer tomorrow
    stack.push(i);
  }

  return result;
}

console.log("Test :", dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// Expected: [1,1,4,2,1,1,0,0]

// 503. Next Greater Element II
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// nums = [1, 2, 1]
function nextGreaterElements(nums) {
  let n = nums.length;
  let result = new Array(n).fill(-1);
  let stack = [];

  // Loop twice: from 0 up to (2 * n - 1)
  for (let i = 0; i < n * 2; i++) {
    // Use modulo to wrap around to the beginning of the array
    let currentIndex = i % n;
    let currentNum = nums[currentIndex];

    // The exact same monotonic stack logic!
    while (stack.length > 0 && currentNum > nums[stack[stack.length - 1]]) {
      let waitingIndex = stack.pop();
      result[waitingIndex] = currentNum;
    }

    // We only push people into the waiting room during the FIRST pass.
    // The second pass is just to help clear out the room.
    if (i < n) {
      stack.push(currentIndex);
    }
  }

  return result;
}

// 901. Online Stock Span
// Prices = [100, 80, 60, 70, 75, 85]
var StockSpanner = function () {
  // We create an empty waiting room when the StockSpanner is initialized
  this.stack = [];
};
/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let span = 1; // Every new price starts with a span of 1 (just itself)

  // While the stack has people AND today's price is >= the top person's price
  while (
    this.stack.length > 0 &&
    price >= this.stack[this.stack.length - 1][0]
  ) {
    let kickedOut = this.stack.pop();

    // Absorb their span!
    span = span + kickedOut[1];
  }

  // Today gets in line, carrying the combined span of everyone they absorbed
  this.stack.push([price, span]);

  return span;
};

console.log("Day 1 (100):", spanner.next(100)); // Expected: 1
console.log("Day 2 (80):", spanner.next(80)); // Expected: 1
console.log("Day 3 (60):", spanner.next(60)); // Expected: 1
console.log("Day 4 (70):", spanner.next(70)); // Expected: 2 (70, 60)
console.log("Day 5 (60):", spanner.next(60)); // Expected: 1 (60)
console.log("Day 6 (75):", spanner.next(75)); // Expected: 4 (75, 60, 70, 60)
console.log("Day 7 (85):", spanner.next(85)); // Expected: 6 (85, 75, 60, 70, 60, 80)

// 155. Min Stack
var MinStack = function () {
  // Our stack will store arrays of two numbers: [actualValue, minSoFar]
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.stack.length === 0) {
    // If the room is empty, this value is automatically the all-time low!
    this.stack.push([val, val]);
  } else {
    // Look at the all-time low on the top person's nametag
    let previousMin = this.stack[this.stack.length - 1][1];

    // The new all-time low is the smaller of the new value and the previous minimum
    let newMin = Math.min(val, previousMin);

    // Push the new value and the new all-time low onto the stack
    this.stack.push([val, newMin]);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  // Return just the actual value (index 0) of the top person
  return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  // Return just the all-time low (index 1) of the top person
  return this.stack[this.stack.length - 1][1];
};

// 394. Decode String
// nested string: "3[a2[c]]"
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];
  let currentString = "";
  let currentNum = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (!isNaN(char)) {
      currentNum = currentNum * 10 + Number(char);
    } else if (char === "[") {
      stack.push([currentString, currentNum]);
      currentString = "";
      currentNum = 0;
    } else if (char === "]") {
      let [prevString, multiplier] = stack.pop();
      currentString = prevString + currentString.repeat(multiplier);
    } else {
      currentString += char;
    }
  }

  return currentString;
};
console.log("Test 1:", decodeString("3[a]2[bc]"));
// Expected: "aaabcbc" (Side-by-side strings)

// 150. Evaluate Reverse Polish Notation
// Input: ["2", "1", "+", "3", "*"] (In standard math, this is (2 + 1) * 3)
/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];

    // If the token is a math operator
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      // Pop the top two numbers. Order is CRITICAL!
      let b = stack.pop(); // The right-side number
      let a = stack.pop(); // The left-side number

      if (token === "+") stack.push(a + b);
      else if (token === "-") stack.push(a - b);
      else if (token === "*") stack.push(a * b);
      // Math.trunc() is required here because JavaScript division produces
      // decimals, and the problem explicitly asks to truncate toward zero.
      else if (token === "/") stack.push(Math.trunc(a / b));
    } else {
      // It's a number! Convert it from a string and push it to the stack
      stack.push(Number(token));
    }
  }

  // The final answer is the only number left on the stack
  return stack[0];
}
console.log("Test 1:", evalRPN(["2", "1", "+", "3", "*"]));
// Expected: 9 -> ((2 + 1) * 3)

// 71. Simplify Path
/**
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
  let stack = [];

  // Split the path into an array of directory names by the '/' character
  let folders = path.split("/");

  for (let i = 0; i < folders.length; i++) {
    let dir = folders[i];

    if (dir === "" || dir === ".") {
      // Ignore empty spaces (from multiple slashes) and current directory dots
      continue;
    } else if (dir === "..") {
      // Hit the "Back" button! Pop the last folder off (if there is one)
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      // It's a valid folder name. Enter it!
      stack.push(dir);
    }
  }

  // Glue the remaining folders together with '/' and ensure it starts with a root '/'
  return "/" + stack.join("/");
}
