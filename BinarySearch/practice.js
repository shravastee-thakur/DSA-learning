function fairCandySwap(aliceSzes, bobSizes) {
  let sumA = aliceSzes.reduce((a, b) => a + b, 0);
  let sumB = bobSizes.reduce((a, b) => a + b, 0);
  let diff = (sumB - sumA) / 2;

  for (let candy of aliceSzes) {
    let target = candy + diff;

    let left = 0;
    let right = bobSizes.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (bobSizes[mid] === target) return [candy, target];
      if (bobSizes[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
  }

  return [];
}

console.log(fairCandySwap([1, 1], [2, 2])); // Output: [1, 2]