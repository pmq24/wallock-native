import { connectToDatabase, Database } from "./Database";
import GroupRepository from "./GroupRepository";

export default class Vault {
  public constructor(readonly name: string) {
    this.database = connectToDatabase(name);
    this.groups = new GroupRepository(this.database);
  }

  public readonly groups: GroupRepository;

  private readonly database: Database;
}
