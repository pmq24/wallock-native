const PouchDB = require("pouchdb");
PouchDB.plugin(require("pouchdb-find"));

export function connectToDatabase<EntityType>(
  databaseName: string
): Database<EntityType> {
  return new PouchDB(databaseName);
}

export type Database<T> = PouchDB.Database<T>;
export type FindResponse<T> = PouchDB.Find.FindResponse<T>;
