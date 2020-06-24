'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    year: DataTypes.STRING,
    age: DataTypes.STRING,
    IMdb: DataTypes.STRING,
    rottenTomatoes: DataTypes.STRING,
    netflix: DataTypes.STRING,
    hulu: DataTypes.STRING,
    primeVideo: DataTypes.STRING,
    disneyPlus: DataTypes.STRING,
    type: DataTypes.STRING,
    directors: DataTypes.TEXT,
    genres: DataTypes.STRING,
    country: DataTypes.STRING,
    language: DataTypes.STRING,
    runtime: DataTypes.STRING
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
  };
  return Movie;
};