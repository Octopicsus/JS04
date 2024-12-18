let arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

let newArr = [];
let amountItems = 0;
let sum = 0;
let multiply = 1;

console.log("\n" + arr.join(" ") + "\n ");

// input a, b, c, ... j

let example = "j";

// --------------------

if (example === "a") {
  // -------------------   a   -------------------

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
      amountItems++;
    }
  }
  console.log("Amount of positive items: " + amountItems);
  console.log("Sum of items: " + sum);
} else if (example === "b") {
  // -------------------   b   -------------------

  newArr = arr.slice();

  newArr.sort(function (a, b) {
    return a - b;
  });

  console.log("Minimal Value: " + newArr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == newArr[0]) {
      console.log("Index: " + (i + 1));
    }
  }
} else if (example === "c") {
  // -------------------   c   -------------------

  newArr = arr.slice();

  newArr.sort(function (a, b) {
    return a - b;
  });

  console.log("Max Value: " + newArr[arr.length - 1]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == newArr[newArr.length - 1]) {
      console.log("Index: " + (i + 1));
    }
  }
} else if (example === "d") {
  // -------------------   d   -------------------

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      amountItems++;
    }
  }

  console.log("Amount of negative: " + amountItems);
} else if (example === "e") {
  // -------------------   e   -------------------

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      //   console.log(arr[i]);
      amountItems++;
    }
  }
  console.log("\nAmount of unpaired: " + amountItems);
} else if (example === "f") {
  // -------------------   f   -------------------

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      // console.log(arr[i]);
      amountItems++;
    }
  }
  console.log("\nAmount of paired: " + amountItems);
} else if (example === "g") {
  // -------------------   g   -------------------

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      //   console.log(arr[i]);
      sum += arr[i];
    }
  }
  console.log("\nSum of pairs: " + sum);
} else if (example === "h") {
  // -------------------   h   -------------------

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      //   console.log(arr[i]);
      sum += arr[i];
    }
  }
  console.log("\nSum of unpairs: " + sum);
} else if (example === "i") {
  // -------------------   i   -------------------

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      //   console.log(arr[i]);
      multiply *= arr[i];
    }
  }
  console.log("Muliply of all positive value: " + multiply);
} else if (example === "j") {
  // -------------------   j   -------------------
  newArr = arr.slice();

  newArr.sort(function (a, b) {
    return a - b;
  });

  newArr.reverse();
  console.log("Max Value: " + newArr[0]);

  for (let i = 0; i < newArr.length; i++) {
    if (arr[i] != newArr[0]) {
      arr[i] = 0;
    }
  }

  console.log('\nNew list:  '+arr.join(" "));
}
