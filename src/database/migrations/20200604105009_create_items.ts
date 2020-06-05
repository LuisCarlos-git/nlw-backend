import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("items", (table) => {
    table.increments("id").notNullable();
    table.string("title").notNullable();
    table.string("image").notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("items");
}
