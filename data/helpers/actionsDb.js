const db = require('../../dbConfig')

module.exports = {
  getActions,
  getAction,
  addAction
}

function getActions() {
  return db('actions')
}
function getAction(id) {
  return db('actions')
    .where({ id })
    .first()
}
function addAction(body) {
  return db('actions')
    .insert(body)
    .then(ids => ids[0])
}
