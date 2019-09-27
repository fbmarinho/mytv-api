'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Channel extends Model {
    static get hidden() {
        return ['created_at', 'updated_at', 'user_id', 'active']
    }
}

module.exports = Channel
