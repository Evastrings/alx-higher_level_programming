#!/usr/bin/node
const process = require('process');
const numArgss = process.argv.length - 2;

if (numArgss === 0) {
  console.log('No argument');
} else if (numArgss === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
