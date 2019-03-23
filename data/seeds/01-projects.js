exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          project_name: 'Do chores',
          description: 'Complete all chores for the week',
          finished: false
        },
        {
          project_name: 'Get groceries',
          description: 'Get neccessary groceries for the week/month',
          finished: false
        },
        {
          project_name: 'Pay bills',
          description: 'Pay all bills due this month',
          finished: false
        }
      ])
    })
}
