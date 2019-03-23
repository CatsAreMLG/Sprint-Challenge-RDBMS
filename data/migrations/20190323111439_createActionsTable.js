exports.up = function(knex, Promise) {
  knex.schema.createTable('actions', tbl => {
    tbl.increments()
    tbl
      .text('actions_description')
      .notNullable()
      .unique()
    tbl
      .string('notes', 128)
      .notNullable()
      .unique()
    tbl.boolean('complete')
  })
}

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('actions')
}
