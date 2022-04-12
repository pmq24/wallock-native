const PouchDB = require("pouchdb");

export type Database<T> = PouchDB.Database<T>;
export type AllDocsResponse<T> = PouchDB.Core.AllDocsResponse<T>;
