console.log("Reverse string");
/*
let n = prompt("please enter a string");

if (n.length > 1) {
  console.log(n);

  let splitString = n.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  console.log(joinArray);
} else {
  alert("Please enter a string more than 2 character to  get reverse string");
}*/

//Method 2 
console.log("reverse string");

let n = prompt("please enter a string");
console.log(n)
let x = "";
for (let i = n.length - 1; i >= 0; i--) {
  x += n[i];
}
console.log(x)


