console.log("reverse sentence Words only");
/*
let n = prompt("please enter a string");

if (n.length > 2) {
  console.log(n);

  let splitString = n.split(" ");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join(" ");
  console.log(joinArray);
} else {
  alert("Please enter a sentence more than 2 words to  get reverse sentence");
} */

// Method 2

let n = prompt("please enter a sentence");
console.log(n);
let x = n.split(" ");
let y = "";
for (let i = x.length - 1; i >= 0; i--) {
  y += x[i] + " ";
}
console.log(y);
