t0 = performance.now();
let n = 10;
for (i = 1; i <= n; i++) {
  for (k = 1; k < i; k++) {
    document.write("&nbsp");
  }
  for (j = i, c = 65; j <= n; j++, c++) {
    j % 2 == 0
      ? document.write(" ", j - i + 1)
      : document.write(" ", String.fromCharCode(c));
  }
  document.write("<br>");
}
for (i = n - 1; i >= 1; i--) {
  for (k = 1; k < i; k++) {
    document.write("&nbsp");
  }
  for (j = i, c = 65; j <= n; j++, c++) {
    j % 2 == 0
      ? document.write(" ", j - i + 1)
      : document.write(" ", String.fromCharCode(c));
  }
  document.write("<br>");
}
t1 = performance.now();
console.log(t1 - t0);
