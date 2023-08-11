import { Request, Response } from "express";
import * as MovieService from "../services/movie.service";
import { Movie } from "../models/movie.model";

export const findAll = async (req: Request, res: Response): Promise<any> => {
  const movies = await MovieService.findAll();

  if (movies.length === 0) {
    return res.sendStatus(204);
  }

  return res.status(200).send(movies);
};

export const findById = async (req: Request, res: Response): Promise<any> => {
  const movie = await MovieService.findById(parseInt(req.params.id));

  if (!movie) {
    return res.status(404).send({ message: "Movie not found" });
  }

  return res.status(200).send(movie);
};

export const create = async (req: Request, res: Response): Promise<any> => {
  const movie = req.body as Movie;
  const id = await MovieService.create(movie);

  return res.status(201).send({ id });
};

export const update = async (req: Request, res: Response): Promise<any> => {
  const id = parseInt(req.params.id);
  const updates = req.body as Movie;
  const movie = await MovieService.update(id, updates);

  if (!movie) {
    return res.status(404).send({ message: "Movie not found" });
  }

  return res.status(200).send(movie);
};

export const remove = async (req: Request, res: Response): Promise<any> => {
  const id = parseInt(req.params.id);
  const removedMovie = await MovieService.remove(id);

  if (!removedMovie) {
    return res.status(404).send({ message: "Movie not found" });
  }

  return res.status(200).send(removedMovie);
};
