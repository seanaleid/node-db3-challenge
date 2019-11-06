const db = require('../dbConfig.js')

module.exports = {
    find,
    findById,
    add,
}

function find() {
    return db('schemes')
};

function findById(id) {
    return db('schemes')
        .where({id})
        .first();
}

function add(scheme) {
    return db('schemes')
        .insert(scheme)
        .then(id => {
            return findById(id[0]);
        });
}

// function update(changes, id) {
    
// }

// function remove(id) {
    
// }
