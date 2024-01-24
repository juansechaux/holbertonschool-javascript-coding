#!/usr/bin/node
// prints the number of movies where the character "Wedge Antilles" is present
const request = require('request');
const films = process.argv[2];
request(films, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const filmsList = JSON.parse(body).results;
    let numberMovies = 0;
    for (let film = 0; film < filmsList.length; film++) {
      for (let character = 0; character < filmsList[film].characters.length; character++) {
        if (filmsList[film].characters[character].includes('/18/')) {
          numberMovies++;
        }
      }
    }
    console.log(numberMovies);
  }
});
