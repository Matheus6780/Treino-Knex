import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("users").del()
        .then(() => {
            // Inserts seed entries
            return knex("users").insert([
                { username: 'maykbrito'},
                { username: 'diegosf'},
                
            ]);
        });
};
