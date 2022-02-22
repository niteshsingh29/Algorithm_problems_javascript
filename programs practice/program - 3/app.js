console.log("largest three distinct program");

//////////////////////////////////

let n = prompt("please enter from how  many elements you want to find largest");
let x = [];

for (let i = 0; i < n; i++) {
  y = +prompt("Enter the  number");
  x.push(y);
}
console.log(x);

let no = x.length;
function maxNumber(x, no) {
  x.sort(function (a, b) {
    return a - b;
  });
  return console.log(
    "Three largest element is ",
    x[no - 1],
    x[no - 2],
    x[no - 3]
  );
}
maxNumber(x, no);
