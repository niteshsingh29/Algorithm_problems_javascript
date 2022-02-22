console.log("Array rotation");

let noOfELements = prompt(
  "Please Enter from how many elements you want to rotate: "
);
let x = [];
for (i = 0; i < noOfELements; i++) {
  y = +prompt("enter element: ");
  x.push(y);
}
console.log(x);
let rotatePosition = prompt("enter from which position you want to rotate  ");
let sliceArray = x.splice(0, rotatePosition);

console.log(x.concat(sliceArray));
