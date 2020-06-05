import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("point_items", (table) => {
    table.increments("id").notNullable();
    table.string("point_id").references("id").inTable("points").notNullable();
    table.string("item_id").references("id").inTable("items").notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("point_items");
}
