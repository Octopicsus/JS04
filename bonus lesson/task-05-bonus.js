let num = parseInt(prompt("Enter your number"));
let isFound = false;
let power = 1;

console.log("\nYour number: ", num, "\n ");

if (num < 1) {
  isFound = false;
  alert('!!! NEGATIVE NUMBER !!!')

} else {
  for (i = 1; i <= num; i++) {
  let  result = Math.pow(3, i);
    if (num === result) {
      isFound = true;
      power = i;
    }
  }
}

if (isFound) {
  console.log("Yeah! The power of the number is found : ^", power);
} else {
  console.log("Nothing found");
}
