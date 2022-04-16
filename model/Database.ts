const PouchDB = require("pouchdb");
PouchDB.plugin(require("pouchdb-find"));

export function connectToDatabase(name: string): Database {
  return new PouchDB(name);
}

export type Database = PouchDB.Database;
export type FindResponse<T> = PouchDB.Find.FindResponse<T>;
