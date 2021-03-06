import express from "express";
import routes from "./routes";
import cors from "cors";
import { resolve } from "path";

const app = express();

// config routes
app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(resolve(__dirname, "..", "uploads")));

app.listen(3333);
