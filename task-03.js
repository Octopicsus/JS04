let n = 123;
console.log('N number: ', n, '\n ');

for (let i = 1; i <= 100; i++) {
  let sqNum = Math.pow(i, 2);
  if (sqNum <= n) {
    console.log(sqNum);
  }
}
