exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments()
    tbl
      .string('project_name', 128)
      .notNullable()
      .unique()
    tbl
      .text('project_description')
      .notNullable()
      .unique()
    tbl.boolean('finished')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
}
