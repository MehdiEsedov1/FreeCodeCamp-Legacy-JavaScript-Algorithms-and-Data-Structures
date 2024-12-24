function titleCase(str) {
  let newString = "";
  newString += str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] == " ") {
      newString += str[i].toUpperCase();
    } else {
      newString += str[i].toLowerCase();
    }
  }
  return newString;
}

titleCase("I'm a little tea pot");
console.log(titleCase("I'm a little tea pot"));
