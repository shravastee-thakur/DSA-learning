function getFrequency(s) {
  let freq = {};

  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  return { freq };
}

console.log(getFrequency("shravastee"));
