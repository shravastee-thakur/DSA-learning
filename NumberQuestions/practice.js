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

console.log(fibonacci(8));
