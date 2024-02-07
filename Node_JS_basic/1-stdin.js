console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf8');

function getName() {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
    console.log('This important software is now closing');
  }
}

process.stdin.on('readable', getName);

// process.stdin.on('readable', function() {
//   var chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write(`Your name is: ${chunk}`);
//     console.log('This important software is now closing');
//   }
// });
