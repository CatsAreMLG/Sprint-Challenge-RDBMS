const db = require('../../dbConfig')

module.exports = {
  getActions,
  getAction,
  addAction,
  updateAction,
  removeAction
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
function updateAction(id, changes) {
  return db('actions')
    .where({ id })
    .update(changes)
    .then(_ => {
      return getAction(id)
    })
}
function removeAction(id) {
  return db('actions')
    .where({ id })
    .del()
}
