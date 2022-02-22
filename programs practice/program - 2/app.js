/* // manually //  method 1

console.log("largest numbers");

let array = [20, 10, 20, 4, 100] ;
let n = array.length;


function maxNumber(array, n) {
  array.sort(function (a, b) {
    return a - b;
  })
  console.log(array)
  return array[n - 1];
}

console.log(maxNumber(array, n)); */



// dynamically  // Method 2
console.log("Largest element");

let n = prompt("please enter from how  many elements you want to find max");
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
  return console.log("largest element is ", x[no - 1]);
}
maxNumber(x, no);
