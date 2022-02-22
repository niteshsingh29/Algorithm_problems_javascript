console.log("3rd Pattern program");
let n = Number(prompt("enter the value"));
for (let i = 1; i <= n; i++) {
  for (k = 1; k < i; k++) {
    document.write("&nbsp;");
  }
  for (let j = 1, u = 65; j <= n - i + 1; j++, u++) {
    j % 2 == 0
      ? document.write(" ", j + i - 1)
      : document.write(" ", String.fromCharCode(u + i - 1));
  }
  document.write("<br>");
}

for (let i = n - 1; i >= 1; i--) {
  for (k = 1; k < i; k++) {
    document.write("&nbsp;");
  }
  for (let j = 1, u = 65; j <= n - i + 1; j++, u++) {
    j % 2 == 0
      ? document.write(" ", j + i - 1)
      : document.write(" ", String.fromCharCode(u + i - 1));
  }
  document.write("<br>");
}
