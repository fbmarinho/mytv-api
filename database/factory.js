'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')



Factory.blueprint('App/Models/User', (faker) => {
    return {
        username: faker.username(),
        email: faker.email(),
        name: faker.name(),
        image: faker.avatar({ fileExtension: 'jpg' }),
        country: faker.country({ full: true }),
        password: faker.hash()
    }
})

Factory.blueprint('App/Models/Channel', (faker) => {
    return {
        name: faker.word(),
        url: faker.url(),
        image: faker.avatar({ fileExtension: 'jpg' }),
        language: faker.country({ full: true }),
        active: true,
        integrity: faker.integer({ min: 60, max: 100 }),
        user_id: faker.integer({ min: 1, max: 10 })
    }
})