const Sequelize = require('sequelize');
const db = require('./config');

let Quote = db.define('quotes', {
    name: { type: Sequelize.STRING, allowNull: false },
    quote: { type: Sequelize.STRING, allowNull: false }
})

Quote.sync({ force: true });

module.exports =Quote;
