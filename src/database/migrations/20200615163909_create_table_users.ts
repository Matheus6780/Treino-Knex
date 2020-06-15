import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('users', (table) => {
        table.increments('id'),
        table.text('username').unique().notNullable(),
        table.timestamp('created_at').defaultTo(knex.fn.now()),
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('users')
}

