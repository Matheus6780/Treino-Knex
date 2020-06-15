const knexfile = require('../../knexfile')
import knex from 'knex'

const result = knex(knexfile.development)


export default result