import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('projects', table => {
        table.increments('id'),
        table.text('title').unique().notNullable(),

        table.integer('user_id').references('users.id').notNullable()
        .onDelete('CASCADE')

        table.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('projects')
}

