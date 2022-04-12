const PouchDB = require("pouchdb");

const dbInstance = new PouchDB("wallock-db");

export default dbInstance;
