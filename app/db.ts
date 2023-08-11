import sqlite3 from "sqlite3";

const DB_PATH = "./movie.sqlite";

export const db = new sqlite3.Database(DB_PATH, (err: any) => {
  if (err) {
    console.error(`Database connection error: ${err.message}`);
  } else {
    console.log("Database connected successfully");
  }
});

export const run = async (query: string, params: any[]): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.run(query, params, function (err: any) {
      if (err) {
        console.error("Error running query", err, query, params);
        reject(err);
      } else {
        // console.log("Query ran successfully", this.lastID, this.changes);
        resolve({
          id: this.lastID,
          changes: this.changes,
        });
      }
    });
  });
};
