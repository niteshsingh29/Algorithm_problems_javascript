console.log("5th Pattern program");

let n = prompt("enter your number");
for (let i = 1; i <= n; i++) {
  for (let k = 1; k < i; k++) {
    document.write("&nbsp;");
  }
  for (let j = i, u = 45; j <= n; j++) {
    if (j != n) {
      document.write(j);
      document.write(String.fromCharCode(u));
    } else {
      document.write(j);
    }
  }
  document.write("<br>");
}
for (let i = n - 1; i >= 1; i--) {
  for (let k = 1; k < i; k++) {
    document.write("&nbsp;");
  }
  for (let j = i, u = 45; j <= n; j++) {
    if (j != n) {
      document.write(j);
      document.write(String.fromCharCode(u));
    } else {
      document.write(j);
    }
  }
  document.write("<br>");
}
