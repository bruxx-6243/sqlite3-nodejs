import { Router } from "express";
import * as MovieController from "./controllers/movie.controllers";

export const router = Router();

router.get("/movies", MovieController.findAll);

router.get("/movies/:id", MovieController.findById);

router.post("/movies", MovieController.create);

router.put("/movies/:id", MovieController.update);

router.delete("/movies/:id", MovieController.remove);
