//? s1 create db-config.js file
//? s2
const knex = require('knex');

//? s3
const config = require('../knexfile.js');

//? s4
module.exports = knex(config.development);