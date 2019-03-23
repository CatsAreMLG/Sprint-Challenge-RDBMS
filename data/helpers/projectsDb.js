const db = require('../../dbConfig')

module.exports = {
  getProjects,
  getProject,
  getProjectSolo,
  addProject,
  updateProject
}

function getProjects() {
  return db('projects')
}
function getProject(id) {
  return db
    .select(
      'project_name',
      'project_description',
      'finished',
      'action_description',
      'notes',
      'complete'
    )
    .from('projects_actions')
    .innerJoin('projects', function() {
      this.on('project_id', '=', 'projects.id')
    })
    .innerJoin('actions', function() {
      this.on('action_id', '=', 'actions.id')
    })
    .where({ 'projects_actions.project_id': id })
}
function getProjectSolo(id) {
  return db('projects')
    .where({ id })
    .first()
}
function addProject(body) {
  return db('projects')
    .insert(body)
    .then(ids => ids[0])
}
function updateProject(id, changes) {
  return db('projects')
    .where({ id })
    .update(changes)
    .then(_ => {
      return getProject(id)
    })
}
