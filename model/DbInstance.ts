import PouchDb from "pouchdb-core";

PouchDb.plugin(require("pouchdb-find"));

const DbInstance = PouchDb;

export default DbInstance;
