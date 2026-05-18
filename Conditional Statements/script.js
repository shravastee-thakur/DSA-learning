// // let age = prompt("Enter your age"); //string
// let age = Number(prompt("Enter your age"));

// if (isNaN(age)) {
//   console.log("Wrong input");
// } else if (age >= 18) {
//   console.log("You can vote");
// } else {
//   console.log("You cannot vote");
// }

//Amount Discount

// let amount = Number(prompt("Enter your amount"));
// let discount;
// if (isNaN(amount)) {
//   console.log("Wrong input");
// } else if (amount >= 0 && amount <= 5000) {
//   console.log("You pay ", amount);
// } else if (amount >= 5001 && amount <= 7000) {
//   discount = (amount * 5) / 100;
//   let payment = amount - discount;
//   console.log("You pay ", payment);
// }

//Bijli Bill
// let unit = Number(prompt("Enter your unit"));
// let amount = 0;

// if (unit > 400) {
//   amount = (unit - 400) * 13; // 500 - 400 * 13 = 1300
//   unit = 400;
// }
// if (unit > 200 && unit <= 400) {
//   amount += (unit - 200) * 8; //
//   unit = 200;
// }
// if (unit > 100 && unit <= 200) {
//   amount += (unit - 100) * 6; //
//   unit = 100;
// }
// if (unit <= 100) {
//   amount += unit * 4; //
// }

// console.log("Amount payable", amount);

// INR Denominator
// let amount = 4823;

// if (amount >= 500) {
//   console.log(Math.floor(amount / 500), " Notes of 500");
//   amount = amount % 500;
// }
// if (amount >= 200) {
//   console.log(Math.floor(amount / 200), " Notes of 200");
//   amount = amount % 200;
// }
// if (amount >= 100) {
//   console.log(Math.floor(amount / 100), " Notes of 100");
//   amount = amount % 100;
// }
// if (amount >= 50) {
//   console.log(Math.floor(amount / 50), " Notes of 50");
//   amount = amount % 50;
// }
// if (amount >= 20) {
//   console.log(Math.floor(amount / 20), " Notes of 20");
//   amount = amount % 20;
// }
// if (amount >= 10) {
//   console.log(Math.floor(amount / 10), " Notes of 10");
//   amount = amount % 10;
// }
// if (amount >= 5) {
//   console.log(Math.floor(amount / 5), " Notes of 5");
//   amount = amount % 5;
// }

// console.log(amount, " Amount remaining");

// Nested ternanry operator
// let num = 0;
// console.log(num > 0 ? "Positive number" : num < 0 ? "negative number" : "zero");

//Switch case
// let score = 55;
// switch (true) {
//   case score >= 90:
//     console.log("Grade: A");
//     break;
//   case score >= 80:
//     console.log("Grade: B");
//     break;
//   default:
//     console.log("Grade: F");
// }
