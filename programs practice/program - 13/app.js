console.log("4th Pattern program");
let n = Number(prompt("enter the value"));
for (let i = 1; i <= n; i++) {
  for (let j = 1, u = 65; j <= n - i + 1; j++, u++) {
    j % 2 == 0
      ? document.write(" ", j + i - 1)
      : document.write(" ", String.fromCharCode(u + i - 1));
  }
  document.write("<br>");
}

for (let i = n - 1; i >= 1; i--) {
  for (let j = 1, u = 65; j <= n - i + 1; j++, u++) {
    j % 2 == 0
      ? document.write(" ", j + i - 1)
      : document.write(" ", String.fromCharCode(u + i - 1));
  }
  document.write("<br>");
}
