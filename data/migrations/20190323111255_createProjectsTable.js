exports.up = function(knex, Promise) {
  knex.schema.createTable('projects', tbl => {
    tbl.increments()
    tbl
      .string('table_name', 128)
      .notNullable()
      .unique()
    tbl
      .text('description', 256)
      .notNullable()
      .unique()
    tbl.boolean('complete')
  })
}

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('projects')
}
