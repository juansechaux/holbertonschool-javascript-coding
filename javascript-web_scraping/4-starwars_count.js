#!/usr/bin/node
const request = require('request');

const args = process.argv;
request(args[2], (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const data = JSON.parse(response.body);
    let count = 0;
    for (const key of data.results) {
      if (key.characters.includes('https://swapi-api.hbtn.io/api/people/18/')) {
        count += 1;
      }
      // console.log(key['characters'])
    }
    console.log(count);
    // console.log(data.results[1]['characters']);
  }
});
