import { Request, Response } from "express";
import knex from "../database/connction";

class ListAllItemsControllers {
  async index(req: Request, res: Response) {
    const { uf, items, city } = req.query;

    const parsedItems = String(items)
      .split(",")
      .map((item) => Number(item.trim()));

    const points = await knex("points")
      .join("point_items", "points.id", "=", "point_items.point_id")
      .whereIn("point_items.item_id", parsedItems)
      .where("city", String(city))
      .where("uf", String(uf))
      .distinct()
      .select("points.*");

    return res.json(points);
  }
}

export default new ListAllItemsControllers();
