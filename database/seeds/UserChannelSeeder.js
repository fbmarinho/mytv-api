'use strict'

/*
|--------------------------------------------------------------------------
| UserChannelSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class UserChannelSeeder {
  async run() {
    await Factory.model("App/Models/User").createMany(10)
    await Factory.model("App/Models/Channel").createMany(100)
  }
}

module.exports = UserChannelSeeder
