#!/usr/bin/node
'use strict';

const request = require('request');
const movieId = process.argv[2];
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }

  const data = JSON.parse(body);

  data.characters.forEach((url) => {
    request(url, (error, response, body) => {
      if (error) {
        console.error(`Error: ${error}`);
        return;
      }

      const character = JSON.parse(body);
      console.log(character.name);
    });
  });
});
