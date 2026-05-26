// 1. sum of all natural numbers from 1 to n

function sumOfNaturalNum(num) {
  // option 1
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;

  // option 2
  //   return (num * (num + 1)) / 2;
}

// 2. sum of digits of a number

function sumOfDigits(num) {
  //143
  let sum = 0;
  while (num > 0) {
    let rem = num % 10; // 3
    sum += rem; // 3
    num = Math.floor(num / 10); // 14
  }
  return sum;
}

// 3. count the number of digits of a number
function countDigits(num) {
  num = Math.abs(num);
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);

  return count;
}


// 4. Palindrome number
function isPalindrome(num) {
  let ogNum = num;
  let rev = 0;
  // 1234
  while (num > 0) {
    let rem = num % 10; // 3
    rev = rev * 10 + rem; // 40
    num = Math.floor(num / 10); // 123
  }
  return rev === ogNum;
}


// 5. Fibonacci Series
// 0 1 1 2 3 5 8

function fibonacci(num) {
  let series = [];
  let prev = 0;
  let cur = 1;
  let next;

  for (let i = 1; i <= num; i++) {
    series.push(prev);
    next = prev + cur;
    cur = prev;
    prev = next;
  }

  return series;
}


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

// While your i variable is jumping by 6 (5, 11, 17...), you are actually checking two numbers during every single loop: i and i + 2. for i += 6

// Here is how it plays out step-by-step:

// 1st Iteration (i = 5): You check 5 (which is i) AND you check 7 (which is i + 2).

// 2nd Iteration (i = 11): You check 11 AND you check 13.

// 3rd Iteration (i = 17): You check 17 AND you check 19.

// 4th Iteration (i = 23): You check 23 AND you check 25.

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0) return false;
  if (n % 3 === 0) return false;

  for (let i = 5; i <= Math.sqrt(n); i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

// 11. List all primes up to n

function getListPrime(n) {
  let primeNums = [];

  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2 || num === 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i <= Math.sqrt(num); i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  };

  for (let i = 0; i <= n; i++) {
    if (isPrime(i)) primeNums.push(i);
  }

  return primeNums;
}

// 12. Find GCD of two numbers
//Factors of 12: 1, 2, 3, 4, 6, 12
//Factors of 18: 1, 2, 3, 6, 9, 18

function gcd(a, b) {
  // 12,18
  while (b !== 0) {
    //  [12,18] = [18, 12 % 18] Since 18 goes into 12 zero times, the remainder is just 12.
    [a, b] = [b, a % b];

    //  then switch now [18, 12] goes up
    //  12 goes into 18 one time, with a remainder of 6. thus now [12, 6]
    // continues till b === 0 ie  [6, 0]
  }
  return Math.abs(a);
}

console.log(gcd(12, 18));

// 13. Find LCM of two numbers
//Multiples of 4: 4, 8, 12, 16, 20, 24, 28...
//Multiples of 6: 6, 12, 18, 24, 30...

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return Math.abs(a);
}

function lcm(a, b) {
  return (a / gcd(a, b)) * b;
}

console.log(lcm(4, 6));

// 14. Print multiplication table of a number

const printTable = (n) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
};

// 15. Armstrong Numbers
function isArmstrong(n) {
  const str = String(n);
  let sum = 0;

  for (const digit of str) {
    // Use the ** operator instead of Math.pow, and Number() instead of parseInt
    sum += Number(digit) ** str.length;
  }

  // Directly return the boolean evaluation instead of an if/else block
  return sum === n;
}

// Driver Code
console.log(isArmstrong(153)); // true

// 16. given Year is Leap Year

function isLeapYear(year) {
  // A year is a leap year if it is divisible by 4 AND NOT 100,
  // OR if it is divisible by 400.
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Driver Code
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2100)); // false

// 17. Prtfect number
/*A number is a perfect number if it is equal to the sum of its proper divisors, that is, the sum of its positive divisors excluding the number itself.*/

function isPerfect(n) {
  if (n <= 1) return false; // 1 and negative numbers are not perfect

  let sum = 1; // 1 is always a proper divisor, start with it
  const limit = Math.sqrt(n);

  for (let i = 2; i < limit; i++) {
    if (n % i === 0) {
      sum += i; // Add the smaller factor
      sum += n / i; // Add its larger partner factor
    }
  }

  // If n is a perfect square, the square root was skipped by the loop
  // so we add it exactly once here
  if (Number.isInteger(limit)) {
    sum += limit;
  }

  return sum === n;
}

// Driver Code
console.log(isPerfect(6)); // true  (1 + 2 + 3)
