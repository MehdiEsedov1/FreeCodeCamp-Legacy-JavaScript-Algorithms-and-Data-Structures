function findLongestWordLength(str) {
  let previousWord = 0;
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > previousWord) {
      previousWord = words[i].length;
    }
  }

  return previousWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
