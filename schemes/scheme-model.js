const db = require('../dbConfig.js')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('schemes')
};

function findById(id) {
    return db('schemes')
        .where({id})
        .first();
}

function findSteps(schemeId) {
    return db('steps')
    .select('steps.id', 'scheme_name', 'instructions')
    .join('schemes', 'schemes.id', 'scheme_id')
    .where('scheme_id', schemeId);
}

function add(scheme) {
    return db('schemes')
        .insert(scheme)
        .then(id => {
            return findById(id[0]);
        });
}

function update(id, changes) {
    return db('schemes')
        .where({id})
        .update(changes);
}

function remove(id) {
    return db('schemes')
        .where('id', id)
        .del()
}
