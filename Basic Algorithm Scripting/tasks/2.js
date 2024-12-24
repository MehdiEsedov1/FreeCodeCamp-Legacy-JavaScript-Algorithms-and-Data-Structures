function reverseString(str) {
  let rvsStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rvsStr += str[i];
  }

  return rvsStr;
}

reverseString("hello");
