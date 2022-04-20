import { connectToDatabase, Database } from "./Database";
import GroupRepository from "./GroupRepository";

export default class Vault {
  public static async init(name: string): Promise<Vault> {
    let vault = new Vault(name);

    if (__DEV__) {
      console.warn("`__DEV__` detected, database will be re-created");
      vault.destroy();
      vault = new Vault(name);
    }

    vault._groups = await GroupRepository.init(vault.database);

    return vault;
  }

  public async destroy() {
    this.database.destroy();
  }

  public get groups(): GroupRepository {
    return this._groups!;
  }

  private constructor(readonly name: string) {
    this.database = connectToDatabase(name);
  }

  private _groups: GroupRepository | undefined;

  private readonly database: Database;
}
