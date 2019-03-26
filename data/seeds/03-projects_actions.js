exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects_actions')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('projects_actions').insert([
        {
          project_id: 1,
          action_id: 1
        },
        {
          project_id: 2,
          action_id: 2
        },
        {
          project_id: 2,
          action_id: 3
        },
        {
          project_id: 3,
          action_id: 4
        }
      ])
    })
}
