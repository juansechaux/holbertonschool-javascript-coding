#!/usr/bin/node
const request = require('request');

const args = process.argv;
request(args[2], (error, response) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(response.body);
    let count = 0;
    for (const allMovies of data.results) {
      for (const character of allMovies.characters) {
        if (character.includes('/18/')) {
          count += 1;
        }
      }
    }
    console.log(count);
  }
});
