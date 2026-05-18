// 1 to n numbers
// for (let i = 1; i <= 22; i++) {
//   console.log(i);
// }

// Sum of n natural numbers and factorial of number
// const numbers = Number(prompt("Enter your number"));

// let sum = 0;
// let factorial = 1;

// for (let i = 1; i <= numbers; i++) {
//   sum += i;
//   factorial *= i;
// }
// console.log("sum ", sum);
// console.log("factorial ", factorial);

// Factors of a number
// const numbers = Number(prompt("Enter your number"));
// for (let i = 1; i <= numbers; i++) {
//   if (numbers % i === 0) {
//     // factors means when you divide remainder is 0
//     console.log(i);
//   }
// }

// Prime numbers
// method 1:
// function isPrime(n) {
//   if (n <= 1) return false; // 0 and 1 are not prime
//   if (n === 2) return true; // 2 is the only even prime
//   if (n % 2 === 0) return false; // Other even numbers are not prime

//   for (let i = 3; i <= Math.sqrt(n); i += 2) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(21));

// function getPrimeNumInRange(start, end) {
//   const prime = [];
//   for (let i = start; i <= end; i++) {
//     if (isPrime(i)) {
//       prime.push(i);
//     }
//   }

//   return prime;
// }
// console.log(getPrimeNumInRange(2, 7));

// break and continue

// for (let i = 1; i <= 23; i++) {
//   // if (i === 11) break;
//   // if (i === 11) continue;
//   else console.log(i);
// }

// while loop

// sum of digits
// let n = Number(prompt("Enter your number"));
// let sum = 0;
// while (n > 0) {
//   let rem = n % 10;
//   sum += rem;
//   n = Math.floor(n / 10);
// }
// console.log(sum);

// reverse of number
// let n = Number(prompt("Enter your number")); // 1234
// let num = 0;
// while (n > 0) {
//   let rem = n % 10; // 4
//   num = num * 10 + rem; // 4 * 10 + 3
//   n = Math.floor(n / 10); // 123
// }
// console.log(num);
