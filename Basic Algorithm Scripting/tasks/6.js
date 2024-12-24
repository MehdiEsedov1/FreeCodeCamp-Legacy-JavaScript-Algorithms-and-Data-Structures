function confirmEnding(str, target) {
  let word1 = "";
  let word2 = "";

  for (let i = target.length - 1; i >= 0; i--) {
    word2 += target[i];
  }

  for (let i = str.length - 1; i > 0; i--) {
    word1 += str[i];
    if (word1 == word2) {
      return true;
    }
  }
  return false;
}

confirmEnding("Bastian", "n");
