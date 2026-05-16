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
