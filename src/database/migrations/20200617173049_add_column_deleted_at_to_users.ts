import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.alterTable('users', (table) => {        
        table.timestamp('deleted_at')
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.alterTable('users', (table) => {        
        table.dropColumn('deleted_at')
    })
}

