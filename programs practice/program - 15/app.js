console.log("6th Pattern program");

let n = 7;
for (let i = 1; i <= n; i++) {
  for (let j = i, u = 45; j >= 1; j--) {
    if (i == n && j == 1) {
      continue;
    }
    if (j != 1) {
      document.write(j, "-");
    } else {
      document.write(j);
    }
  }
  for (let k = n - 1; k >= i; k--) {
    document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
  }
  for (let j = 1, u = 45; j <= i; j++) {
    if (j != i) {
      document.write(j, "-");
    } else {
      document.write(j);
    }
  }
  document.write("<br>");
}

for (let i = n - 1; i >= 1; i--) {
  for (let j = i, u = 45; j >= 1; j--) {
    if (i == n && j == 1) {
      continue;
    }
    if (j != 1) {
      document.write(j, "-");
    } else {
      document.write(j);
    }
  }
  for (let k = n - 1; k >= i; k--) {
    document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
  }

  for (let j = 1, u = 45; j <= i; j++) {
    if (j != i) {
      document.write(j, "-");
    } else {
      document.write(j);
    }
  }
  document.write("<br>");
}
