import { Database, FindResponse } from "./Database";
import { GroupEntity } from "./groups/GroupEntity";

export default class GroupRepository {
  public constructor(private readonly database: Database) {}

  public async hasName(nameToCheck: string): Promise<boolean> {
    const findResponse: FindResponse<GroupEntity> =
      await new PouchDB<GroupEntity>(this.database.name).find({
        selector: {
          type: "GROUP",
          name: nameToCheck,
        },
      });

    return findResponse.docs.length === 1;
  }

  public async doesntHaveName(nameToCheck: string): Promise<boolean> {
    return !this.hasName(nameToCheck);
  }
}
