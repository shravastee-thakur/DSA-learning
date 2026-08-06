/*
Basic
1. Sum of every window of size K
2. Maximum sum of a subarray of size K
3. Minimum sum of a subarray of size K
4. Average of every window of size K
5. Count windows whose sum is greater than X
6. Count windows whose sum is less than X
7. First negative number in every window of size K
8. Maximum element in every window of size K 
9. Difference between max and min in every window

*/

// 1. Sum of Every Window of Size K
// const arr = [1, 2, 3, 4, 5];
// const k = 3;

// Output: [6, 9, 12]

// Time: O(n)
// Space: O(n)

function windowSums(arr, k) {
  let result = [];
  let windowSum = 0;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    if (i >= k - 1) {
      result.push(windowSum);
      windowSum -= arr[i - k + 1]; // i is at (3) ie index 2 so 2 - 3 + 1
    }
  }
  return result;
}

console.log(windowSums(arr, k));

// 2. Maximum Sum of a Subarray of Size K
// const arr = [2, 1, 5, 1, 3, 2];
// k = 3
// Time: O(n)
// Space: O(1)

// Output: 9

function maxWindowSum(arr, k) {
  let windowSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    if (i >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[i - k + 1];
    }
  }

  return maxSum;
}

console.log(maxWindowSum(arr, 3));

// 3. Minimum Sum of a Subarray of Size K
// const arr = [2, 1, 5, 1, 3, 2];
// k = 3
// Output: 6

// Time: O(n)

function minWindowSum(arr, k) {
  let windowSum = 0;
  let minSum = Infinity;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    if (i >= k - 1) {
      minSum = Math.min(minSum, windowSum);
      windowSum -= arr[i - k + 1];
    }
  }

  return minSum;
}

// console.log(minWindowSum(arr, 3));

// 4. Average of Every Window of Size K
// const arr = [1, 2, 3, 4, 5];
// k = 2
// Output: [1.5, 2.5, 3.5, 4.5]

// Time: O(n)

function windowAverages(arr, k) {
  let result = [];
  let windowSum = 0;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    if (i >= k - 1) {
      result.push(windowSum / k);
      windowSum -= arr[i - k + 1];
    }
  }

  return result;
}

console.log(windowAverages(arr, 2));

// 5. Count Windows Whose Sum is Greater Than X
// const arr = [2, 1, 5, 1, 3, 2];
// Output: 2

function countGreater(arr, k, x) {
  let count = 0;
  let windowSum = 0;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    if (i >= k - 1) {
      if (windowSum > x) count++;
      windowSum -= arr[i - k + 1];
    }
  }
  return count;
}

console.log(countGreater(arr, 3, 7));

// 6. Count Windows Whose Sum is Less Than X
// const arr = [2, 1, 5, 1, 3, 2];
// Output: 2

function countLess(arr, k, x) {
  let count = 0;
  let windowSum = 0;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    if (i >= k - 1) {
      if (windowSum < x) count++;
      windowSum -= arr[i + k - 1];
    }
  }

  return count;
}

console.log(countLess(arr, 3, 8));

// 7. First Negative Number in Every Window of Size K
// const arr = [-8, 2, 3, -6, 10];
// Output: [-8, 0, -6, -6]

function firstNegative(arr, k) {
  let result = [];
  let negatives = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negatives.push(arr[i]);
    }

    if (i >= k - 1) {
      if (negatives.length > 0) {
        result.push(negatives[0]);
      } else {
        result.push(0);
      }

      let leftEdgeNumber = arr[i - k + 1];
      if (leftEdgeNumber === negatives[0]) {
        negatives.shift();
      }
    }
  }
  return result;
}

console.log(firstNegative([-8, 2, 3, -6, 10], 2));

// 8. Maximum Element in Every Window
// const arr = [1, 3, -1, -3, 5, 3, 6, 7];
// Output: [3, 3, 5, 5, 6, 7]

function maxInWindow(arr, k) {
  let result = [];
  let queue = [];

  for (let i = 0; i < arr.length; i++) {
    while (queue.length > 0 && arr[queue[queue.length - 1]] <= arr[i]) {
      queue.pop();
    }

    queue.push(i);

    if (queue[0] === i - 1) {
      queue.shift();
    }

    if (i >= k - 1) {
      result.push(arr[queue[0]]);
    }
  }
  return result;
}

console.log(minInWindow(arr, 3));
