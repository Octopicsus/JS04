let isSimple = true;
let num = parseInt(prompt("Enter your number"));

console.log("\nChecking number: ", num, " \n ");

if (num <= 1) {
  isSimple = false;
} else {
  for (let i = 2; i <= num / 2; i++) {
    console.log(i);
    if (num % i === 0) {
      isSimple = false;
    }
  }
}

if (isSimple) {
  console.log("Yeah! You have a simple number.");
} else {
  console.log("Your number is NOT simple.");
}

let x = num % 1;
console.log(x);
