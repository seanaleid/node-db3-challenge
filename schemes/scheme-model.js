const db = require('../dbConfig.js')

module.exports = {
    find
}

function find() {
    return db('schemes')
}