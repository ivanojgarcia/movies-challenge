const Sequelize = require('sequelize');
const infoDB = require("./config.json");

const dialect = infoDB.development.dialect;
const host = process.env.DB_HOST;
const port = infoDB.development.port;
const database = infoDB.development.database;
const username = infoDB.development.username;
const password = infoDB.development.password;
let connectionString = `${dialect}://${username}:${password}@${host}:${port}/${database}`;

// Init connection without optional configuration	
const sequelize = new Sequelize({
    dialect: 'postgres',
    host,
    port,
    database,
    username,
    password
});

module.exports = sequelize;