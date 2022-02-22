console.log("7th Pattern program");

let n = Number(prompt("enter input: "));

for (i = 1; i <= n; document.write("<br>"), i++) {
  for (j = i; j >= 1; j--) {
    if (j == 1 && i == n) {
      continue;
    }
    j != 1 ? document.write(j, "-") : document.write(j);
  }
  for (k = i; k <= n - 1; k++) {
    i == n - 1
      ? document.write("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp")
      : document.write("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
  }
  for (l = 1; l <= i; l++) {
    l == 1 ? document.write(l) : document.write("-", l);
  }
}
for (i = 1; i <= n - 1; document.write("<br>"), i++) {
  for (j = n - i; j >= 1; j--) {
    j != 1 ? document.write(j, "-") : document.write(j);
  }

  for (k = 1; k <= i; k++) {
    i == 1
      ? document.write("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp")
      : document.write("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
  }
  for (l = 1; l <= n - i; l++) {
    l != 1 ? document.write("-", l) : document.write(l);
  }
}
