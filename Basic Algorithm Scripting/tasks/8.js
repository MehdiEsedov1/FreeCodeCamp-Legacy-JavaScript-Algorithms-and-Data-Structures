function truncateString(str, num) {
  let newString = "";

  for (let i = 0; i < num; i++) {
    if (i == str.length) {
      break;
    }

    newString += str[i];
  }

  if (num < str.length) {
    return newString + "...";
  }

  return newString;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
