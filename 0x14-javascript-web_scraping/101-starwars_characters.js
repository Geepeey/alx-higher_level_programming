#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const baseUrl = 'https://swapi.dev/api/films/';
const url = `${baseUrl}${movieId}/`;

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  
    const movie = JSON.parse(body);
    const characters = movie.characters;
    characters.forEach(characterUrl) {
      request(characterUrl, (error, response, body) => {
        if (error) {
          console.error(error);
        }
        
          const character = JSON.parse(body);
          console.log(character.name);
        }
      });
    });
  }
});
