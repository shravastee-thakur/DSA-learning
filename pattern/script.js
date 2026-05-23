let prompt = require("prompt-sync")();
let n = prompt("Enter your number: ");

// Right angle triangle *
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(i);
//   }
//   console.log();
// }

// Right angle triangle 1 2 3
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j + "");
//   }
//   console.log();
// }

// Right angle triangle A B C
for (let i = 1; i <= n; i++) {
  let ascii = 65;
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(ascii) + "");
    ascii++;
  }
  console.log();
}
