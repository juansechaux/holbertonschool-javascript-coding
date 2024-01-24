#!/usr/bin/node
const fs = require('fs');

const args = process.argv;
// console.log(args)
// console.log(typeof args)
// console.log(args[2])
fs.readFile(args[2], 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
