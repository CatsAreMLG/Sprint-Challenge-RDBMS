const db = require('../../dbConfig')

module.exports = {
  getProjects,
  getProject,
  addProject
}

function getProjects() {
  return db('projects')
}
function getProject(id) {
  return db('projects')
    .where({ id })
    .first()
}
function addProject(body) {
  return db('projects')
    .insert(body)
    .then(ids => ids[0])
}
