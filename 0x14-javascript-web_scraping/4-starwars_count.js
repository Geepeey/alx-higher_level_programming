#!/usr/bin/node
'use strict';

const request = require('request');
const apiUrl = process.argv[2];

function isWedgeAntillesPresent(movie) {
  return movie.characters.includes('https://swapi-api.alx-tools.com/api/people/18/');
}

request(apiUrl, (err, res, body) => {
  if (err) {
    console.error(err);
  }
  const movies = JSON.parse(body).results;
  const moviesWithWedgeAntilles = movies.filter(isWedgeAntillesPresent);
  console.log(moviesWithWedgeAntilles.length);
});
