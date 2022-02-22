

// dynamically //   method 2

let n = prompt("mETHOD -2 Please enter how many number do you want to enter");
let x,
  sum = 0;
for (let i = 0; i < n; i++) {
  x = parseInt(prompt("enter number"));
  sum += parseInt(x);
}
console.log(sum);
