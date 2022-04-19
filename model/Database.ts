import PouchDB from "pouchdb-react-native";
PouchDB.plugin(require("pouchdb-find"));
PouchDB.plugin(require("pouchdb-adapter-asyncstorage").default);

export function connectToDatabase(name: string): Database {
  return new PouchDB(name, { adapter: "asyncstorage" });
}

export type Database = PouchDB.Database;
export type AllDocsResponse<T> = PouchDB.Core.AllDocsResponse<T>;
export type FindResponse<T> = PouchDB.Find.FindResponse<T>;
