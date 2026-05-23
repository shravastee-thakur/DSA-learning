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

// 5. Fibonacci Series
// 0 1 1 2 3 5 8

// function fibonacci(num) {
//   let series = [];
//   let prev = 0;
//   let cur = 1;
//   let next;

//   for (let i = 1; i <= num; i++) {
//     series.push(prev);
//     next = prev + cur;
//     cur = prev;
//     prev = next;
//   }

//   return series;
// }

// console.log(fibonacci(8));

// 6. Product of digits of a number
const productOfDigits = (n) => {
  if (n === 0) return 0;
  let prod = 1,
    num = Math.abs(n);
  while (num > 0) {
    prod *= num % 10;
    num = Math.floor(num / 10);
  }
  return prod;
};

//7. Count even and odd digits separately

const countEvenOddDigits = (n) => {
  let even = 0,
    odd = 0,
    num = Math.abs(n);
  while (num > 0) {
    (num % 10) % 2 === 0 ? even++ : odd++;
    num = Math.floor(num / 10);
  }
  return { even, odd };
};

//8. Reverse a number

const reverseNumber = (n) => {
  let rev = 0,
    num = Math.abs(n);
  const isNegative = n < 0;
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return isNegative ? -rev : rev;
};

//9. Factorial of a number

const factorial = (n) => {
  if (n < 0) throw new Error("Factorial undefined for negatives");
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
};

// 10. Check if a number is prime

const isPrime = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
};

// 11. List all primes up to n

const primesUpToN = (n) => {
  if (n < 2) return [];
  const sieve = new Array(n + 1).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i * i <= n; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= n; j += i) sieve[j] = false;
    }
  }
  const primes = [];
  for (let i = 2; i <= n; i++) if (sieve[i]) primes.push(i);
  return primes;
};

// 12. Find GCD of two numbers

const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return Math.abs(a);
};

// 13. Find LCM of two numbers

const lcm = (a, b) => {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
};

// 14. Print multiplication table of a number

const printTable = (n) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
};
