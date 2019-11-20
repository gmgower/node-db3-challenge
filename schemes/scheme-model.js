//? s5
const db = require('../data/db-config.js');

//? s7
function find() {
    return db('schemes');
}

function findPosts(id){
    
}

//? s6
module.exports = {
    find,
}