function isPerfect(n) {
  let sum = 1;

  for (i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return true;

    if (i !== n / 2) {
      sum += n / 2;
    }
  } 

  return sum === n;
}

console.log(isPerfect(6));
