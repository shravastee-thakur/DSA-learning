function findWordsContaining(word, char) {
  let resultIndices = [];
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word[i].length; j++) {
      if (word[i][j] === char) {
        indexes.push(i);
        resultIndices.push(i);
        break;
      }
    }
  }
  return resultIndices;
}

console.log(findWordsContaining(["leet", "code"], "e"));
