exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          action_description: 'clean room',
          notes: 'wipe down surfaces, sweep floor, etc.',
          completed: false
        },
        {
          action_description: 'get produce',
          notes: 'veggies',
          completed: false
        },
        {
          action_description: 'get meat',
          notes: 'meat, chicken, fish, etc.',
          completed: false
        },
        {
          action_description: 'pay phone bill',
          notes: 'pay phone bill: $50',
          completed: false
        }
      ])
    })
}
