import { connectToDatabase, Database } from "./Database";

export default class Vault {
  public constructor(readonly name: string) {
    this.database = connectToDatabase(name);
  }

  private readonly database: Database;
}
