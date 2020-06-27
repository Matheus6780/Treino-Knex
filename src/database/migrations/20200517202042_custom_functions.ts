import * as Knex from "knex"

const CUSTOM_FUNCTIONS = `
CREATE OR REPLACE FUNCTION on_update_timestamp()
RETURNS trigger AS $$

BEGIN
    NEW.updated_at =  now();
    RETURN NEW;
END;

$$ language 'plpgsql';
`

const DROP_CUSTOM_FUNCTIONS = `

DROP FUNCTION on_update_timestamp()
`

export async function up(knex: Knex): Promise<any> {

    return knex.raw(CUSTOM_FUNCTIONS)
}

export async function down (knex: Knex): Promise<any> {

    return knex.raw(DROP_CUSTOM_FUNCTIONS)
}

