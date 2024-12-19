function sum(arr, n) {
  if (n - 1 == -1) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

sum([1, 2, 3], 3);
