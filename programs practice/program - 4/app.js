console.log("elements in array which have at least three greater");

//////////////////////////////////

let n = prompt("please enter from how  many elements you want to find minimum");
let x = [];

for (let i = 0; i < n; i++) {
  y = +prompt("Enter the  number");
  x.push(y);
}
console.log(x);

function maxNumber(x) {
  x.sort(function (a, b) {
    return a - b;
  });
  console.log(x);

  let removed = x.splice(x.length - 3, 3);
  return console.log(x);
}
maxNumber(x);
