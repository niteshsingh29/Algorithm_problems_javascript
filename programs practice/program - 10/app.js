console.log("1st Pattern program ");

let n = Number(prompt("enter input:"));
for (i = 1; i <= n; i++) {
  for (j = i, c = 65; j <= n; j++, c++) {
    j % 2 == 0
      ? document.write(" ", j - i + 1)
      : document.write(" ", String.fromCharCode(c));
  }
  document.write("<br>");
}
for (i = n - 1; i >= 1; i--) {
  for (j = i, c = 65; j <= n; j++, c++) {
    j % 2 == 0
      ? document.write(" ", j - i + 1)
      : document.write(" ", String.fromCharCode(c));
  }
  document.write("<br>");
}
