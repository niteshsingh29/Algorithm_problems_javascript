console.log("Catalan number");

// formula of catalan number is C(i) * C(n-i-1) //

function catalan(n) {
  if (n <= 1) {
    return 1;
  }
  printCatalan = 0;
  for (let i = 0; i < n; i++) {
    printCatalan = printCatalan + catalan(i) * catalan(n - i - 1);
  }
  return printCatalan;
}

for (let i = 0; i < 10; i++) {
  console.log(catalan(i));
}
