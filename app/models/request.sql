-- SQLite
-- CREATE TABLE IF NOT EXISTS movies(
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     title VARCCHAR(150),
--     year INTEGER,
--     director VARCHAR(10)
-- );

-- CREATE TABLE IF NOT EXISTS actors(
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     movie_id INTEGER REFERENCES  movies(id),
--     f_name VARCHAR(10),
--     l_name VARCHAR(10),
--     title VARCHAR(150)
-- );

-- SELECT * FROM movies;