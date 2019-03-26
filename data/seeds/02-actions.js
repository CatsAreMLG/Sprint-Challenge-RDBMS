exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        {
          action_description: 'clean room',
          notes: 'wipe down surfaces, sweep floor, etc.',
          complete: false
        },
        {
          action_description: 'get produce',
          notes: 'veggies',
          complete: false
        },
        {
          action_description: 'get meat',
          notes: 'meat, chicken, fish, etc.',
          complete: false
        },
        {
          action_description: 'pay phone bill',
          notes: 'pay phone bill: $50',
          complete: false
        }
      ])
    })
}
