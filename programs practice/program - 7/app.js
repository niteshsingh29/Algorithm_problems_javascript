/*
console.log("Reverse array");

let n = prompt("enter for how many numbers you want to reverse");
let emptyArray = [];

for (let i = 0; i < n; i++) {
  y = +prompt("enter Number");
  emptyArray.push(y);
}
console.log(emptyArray);

let reversedArray = emptyArray.reverse();
console.log(reversedArray); 
*/

// method 2

console.log("Reverse array");

let noOfElements = prompt("enter for how many numbers you want to reverse");
let x = [];

for (let i = 0; i < noOfElements; i++) {
  y = +prompt("enter Number");
  x.push(y);
}
console.log(x);

let z = [];
for (let i = x.length - 1; i >= 0; i--) {
  b = x[i];
  z.push(b)
}
console.log(z);
