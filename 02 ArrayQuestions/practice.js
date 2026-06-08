function sortByFrequency(arr) {
  const freq = {};

  for (const num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  return arr.sort((a, b) => {
    if (freq[b] === freq[a]) return a - b;
    return freq[b] - freq[a];
  });
}

console.log(sortByFrequency([2, 2, 2, 7, 7, 2, 11, 15]));
