#!/usr/bin/node
const sizee = parseInt(process.argv[2]);
if (isNaN(sizee)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < sizee; i++) {
    console.log('X'.repeat(sizee));
  }
}
