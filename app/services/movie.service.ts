import { Movie } from "../models/movie.model";
import { run } from "../db";

export const findAll = async (): Promise<Movie[]> => {
  const rows = await run("SELECT * FROM movies", []);

  if (!rows) {
    return [];
  }

  return rows;
};

export const findById = async (id: number): Promise<Movie> => {
  const rows = await run("SELECT * FROM movies WHERE id = $1", [id]);

  return rows.length === 1 ? rows[0] : null;
};

export const create = async (movie: Movie): Promise<Movie> => {
  const result = await run(
    "INSERT INTO movies (title, year, director) VALUES ($1, $2, $3) RETURNING *",
    [movie.title, movie.year, movie.director]
  );

  return result.id;
};

export const update = async (
  id: number,
  updates: Partial<Movie>
): Promise<Movie | null> => {
  const existingMovie = await findById(id);

  if (!existingMovie) {
    return null;
  }

  const updatesResult = { ...existingMovie, ...updates };
  await run(
    "UPDATE movies SET title = $1, year = $2, director = $3 WHERE id = $4 RETURNING *",
    [updatesResult.title, updatesResult.year, updatesResult.director, id]
  );

  return updatesResult;
};

export const remove = async (id: number): Promise<boolean> => {
  const result = await run("DELETE FROM movies WHERE id = $1", [id]);

  return result.changes === 1;
};
