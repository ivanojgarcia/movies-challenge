'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      IMdb: {
        type: Sequelize.STRING
      },
      rottenTomatoes: {
        type: Sequelize.STRING
      },
      netflix: {
        type: Sequelize.STRING
      },
      hulu: {
        type: Sequelize.STRING
      },
      primeVideo: {
        type: Sequelize.STRING
      },
      disneyPlus: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      directors: {
        type: Sequelize.TEXT
      },
      genres: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      runtime: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Movies');
  }
};