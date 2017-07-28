//create db connection to elephantsql
const Sequelize = require('sequelize');

const db = new Sequelize('postgres://bpakouqv:YTGRwgZvKcSoge6hqnO-5WkNA5hu7sNZ@babar.elephantsql.com:5432/bpakouqv', {
    dialect: 'postgres',
})

console.log('Connected to remote db');

module.exports = db;