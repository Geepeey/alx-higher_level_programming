#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const baseUrl = 'https://swapi.dev/api/films/';
const url = `${baseUrl}${movieId}/`;

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const movie = JSON.parse(body);
    const characters = movie.characters;
    characters.forEach(function (characterUrl) {
      request(characterUrl, function (error, response, body) {
        if (error) {
          console.error(error);
        } else {
          const character = JSON.parse(body);
          console.log(character.name);
        }
      });
    });
  }
});
