// multiplication table of a number

function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}
console.log(multiplicationTable(2));
