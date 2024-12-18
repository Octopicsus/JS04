let arr = [5, 7, 1, 0, 8, 9, 4, 6, 2, 3];
console.log(arr);

arr = arr.sort();
console.log(arr);

arr = [12, "bcb", 23, 11, 0, -2, "b", "aa"];
arr = arr.sort();
console.log(arr);

arr = [5, -1, 10, 2, 8, 1, 2, 0];
arr = arr.sort(function (a, b) {
  return a - b;
});
console.log(arr);
