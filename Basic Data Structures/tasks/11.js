function filteredArray(arr, elem) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let state = false;

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == elem) {
        state = true;
        break;
      }
    }

    if (state == false) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);
