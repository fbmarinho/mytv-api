'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const User = use('App/Models/User')
const Channel = use('App/Models/Channel')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/users', async () => {
  const users = await User.query().orderBy("id", "asc").fetch()
  return users
})

Route.get('/users/:id', async ({ params }) => {
  const user = await User.query()
    .with('channels',
      c => c.where('active', true))
    .where("id", params.id).first();
  return user;
})

Route.get('/channels', async () => {
  const channels = await Channel.query().orderBy("id", "asc").fetch()
  return channels
})
