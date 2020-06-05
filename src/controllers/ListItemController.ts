import { Request, Response } from "express";
import knex from "../database/connction";

class ListItemController {
  async index(req: Request, res: Response) {
    const items = await knex("items").select("*");

    const formatedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image: `http://localhost:3333/uploads/${item.image}`,
      };
    });

    return res.json(formatedItems);
  }
}

export default new ListItemController();
