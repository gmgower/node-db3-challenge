//? s5
const db = require('../data/db-config.js');

//? s7
function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes').where({id});
}


function findSteps(id){
    return db('steps')
    .join('schemes', 'schemes.id', 'steps.scheme_id')

    .select('steps.id', 
    'schemes.scheme_name', 
    'steps.step_number', 
    'steps.instructions')

    .where({'steps.scheme_id':id})

}

function add(schemeData) {
    return db('schemes').insert(schemeData);
}

function update(changes, id) {
    return db('schemes').where({id}).update(changes);
}

function remove(id) {
    return db('schemes').where({id}).del();
}
//? s6
module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}