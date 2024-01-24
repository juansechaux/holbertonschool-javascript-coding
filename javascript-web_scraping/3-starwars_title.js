#!/usr/bin/node
const request = require('request');

const args = process.argv;
request(`https://swapi-api.hbtn.io/api/films/${args[2]}`, (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const data = JSON.parse(response.body);
    console.log(data.title);
  }
});
