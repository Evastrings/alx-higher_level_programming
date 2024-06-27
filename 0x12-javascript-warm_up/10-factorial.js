#!/usr/bin/node
function factorial (x) {
  if (x <= 1) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}
const firstArg = parseInt(process.argv[2]);
if (isNaN(firstArg)) {
  console.log('1');
} else {
  console.log(factorial(firstArg));
}

