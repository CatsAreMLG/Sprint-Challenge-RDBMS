exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects_actions', tbl => {
    tbl.increments()
    tbl.integer('project_id').notNullable()
    tbl.integer('action_id').notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects_actions')
}
