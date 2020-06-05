import { Router } from "express";

import ListItemController from "./controllers/ListItemController";
import CollectionPointsController from "./controllers/CollectionPointsController";
import ListAllItemsControllers from "./controllers/ListAllItemsControllers";

const routes = Router();

routes.get("/items", ListItemController.index);
routes.get("/all", ListAllItemsControllers.index);
routes.post("/register", CollectionPointsController.store);
routes.get("/points/:id", CollectionPointsController.show);

export default routes;
