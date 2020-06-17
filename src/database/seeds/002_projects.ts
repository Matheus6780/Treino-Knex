import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("projects").del()
        .then(() => {
            // Inserts seed entries
            return knex("projects").insert([
                { user_id: 1, title: 'Meu projeto'}
            ]);
        });
};
