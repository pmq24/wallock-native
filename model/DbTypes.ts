const PouchDB = require("pouchdb");

export type DbInstance = PouchDB.Database;
export type AllDocsResponse<T> = PouchDB.Core.AllDocsResponse<T>;
