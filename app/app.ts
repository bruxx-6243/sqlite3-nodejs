import express from "express";
import { json } from "body-parser";
import { router } from "./routes";

export const app = express();

app.use(json());
app.use("/", router);
