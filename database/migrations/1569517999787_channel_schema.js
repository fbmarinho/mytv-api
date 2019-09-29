'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChannelSchema extends Schema {
  up() {
    this.create('channels', (table) => {
      table.increments()
      table.string("name")
      table.string("url")
      table.string("image")
      table.string("language")
      table.boolean("active")
      table.integer("integrity")
      table.integer("user_id").references("id").inTable("users").onDelete("CASCADE").onUpdate("CASCADE")
      table.timestamps()
    })
  }

  down() {
    this.drop('channels')
  }
}

module.exports = ChannelSchema
