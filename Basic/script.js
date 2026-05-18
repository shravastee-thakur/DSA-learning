// 1. sum of all natural numbers from 1 to n

// function sumOfNaturalNum(num) {
//   // option 1
//   //   let sum = 0;
//   //   for (let i = 1; i <= num; i++) {
//   //     sum += i;
//   //   }
//   //   return sum;
//   // option 2
//   //   return (num * (num + 1)) / 2;
// }

// console.log(sumOfNaturalNum(10));

// --------x----------

// 2. sum of digits of a number

// function sumOfDigits(num) {
//   //143
//   let sum = 0;
//   while (num > 0) {
//     let rem = num % 10; // 3
//     sum += rem; // 3
//     num = Math.floor(num / 10); // 14
//   }
//   return sum;
// }

// console.log(sumOfDigits(1234));

// --------x----------

// 3. count the number of digits of a number
// function countDigits(num) {
//   num = Math.abs(num);
//   let count = 0;
//   do {
//     count++;
//     num = Math.floor(num / 10);
//   } while (num > 0);

//   return count;
// }

// console.log(countDigits(-1234));

// --------x----------

// 4. Palindrome number
// function isPalindrome(num) {
//   let ogNum = num;
//   let rev = 0;
//   // 1234
//   while (num > 0) {
//     let rem = num % 10; // 3
//     rev = rev * 10 + rem; // 40
//     num = Math.floor(num / 10); // 123
//   }
//   return rev === ogNum;
// }

// console.log(isPalindrome(252));

// --------x----------

// 5. Fibonacci Series
// 0 1 1 2 3 5 8

// function fibonacci(n) {
//   if (n < 2) {
//     return n;
//   }

//   let prev = 0;
//   let curr = 1;
//   let next;
//   for (let i = 2; i <= n; i++) {
//     next = prev + curr;
//     prev = curr;
//     curr = next;
//   }

//   return next;
// }

// console.log(fibonacci(7));

// --------x----------

// 6. given an array nums containing n distinct  numbers in the range [0,n] return the only number in the range that is missing from the array (missing number)

// function missingNumber(num) {
//   let missingnum = num.length;
//   for (let i = 0; i < num.length; i++) {
//     missingnum += i - num[i]; // missing number + (ith positin - num on that position)
//   }
//   return missingnum;
// }

// console.log(missingNumber([3, 0, 1])); // 2
// console.log(missingNumber([0, 1])); // 2
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8

// --------x----------

// 7. Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

// function countOdds(low, high) {
//   return Math.floor((high + 1) / 2) - Math.floor(low / 2);
// }

// console.log(countOdds(3, 7)); // 3 → 3,5,7
// console.log(countOdds(8, 10)); // 1 → 9
// console.log(countOdds(0, 0)); // 0
// console.log(countOdds(1, 1)); // 1 → 1
