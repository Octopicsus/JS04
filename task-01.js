let arr = [];
let length;
let element;

do {
  length = parseInt(prompt("Enter quantity of items"));
} while (length < 1 || isNaN(length) || length === null);

if (length === 1) {
  console.log("\nYou list have just ONE item\n ");
} else {
  console.log("\nYou list have: " + length + " items\n ");
}

for (let i = 0; i < length; i++) {
  do {
    element = prompt("Enter your element");
  } while (element === null);

  arr.push(element);
}

console.log("\nYour list: " + arr.join(" "));
document.write("<p>" + arr.join(" ") + "</p>");

arr.sort();

document.write("<p>" + arr.join(" ") + "</p>");
console.log("\nSorted list: " + arr.join(" ") + "\n ");

if (length >= 4) {
  arr.splice(1, 3);
} else {
  alert(
    "Your example is not suitable for demonstration splice().\nEnter the number of elements greater than 4."
  );
}

console.log("New list: " + arr.join(" "));
document.write("<p>" + arr.join(" ") + "</p>");
console.log("List lenght: " + arr.length);
