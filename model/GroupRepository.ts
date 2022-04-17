import { Database } from "./Database";
import { GroupCreation } from "./groups/GroupCreation";
import { GroupEntity } from "./groups/GroupEntity";

export default class GroupRepository {
  public static async init(database: Database): Promise<GroupRepository> {
    const groupRepo = new GroupRepository(database);

    const dbHasNotBeenCreatedBefore = await groupRepo.doesntHaveName("Root");

    if (dbHasNotBeenCreatedBefore) {
      await groupRepo.database.put<GroupEntity>({
        type: "GROUP",
        _id: "Root",
        parentId: undefined,
      });

      await groupRepo.database.put<GroupEntity>({
        type: "GROUP",
        _id: "Income",
        parentId: "Root",
      });

      await groupRepo.database.put<GroupEntity>({
        type: "GROUP",
        _id: "Expense",
        parentId: "Root",
      });
    }

    return groupRepo;
  }

  public async create(groupCreation: GroupCreation): Promise<GroupEntity> {
    if (await this.hasName(groupCreation.name))
      throw new Error(`Group name "${groupCreation.name}" already exists`);

    if (await this.doesntHaveName(groupCreation.parentName))
      throw new Error(
        `Parent group "${groupCreation.parentName}" doesn't exist`
      );

    await this.database.put<GroupEntity>({
      type: "GROUP",
      _id: groupCreation.name,
      parentId: groupCreation.parentName,
    });

    return await this.database.get<GroupEntity>(groupCreation.name);
  }

  public async hasName(nameToCheck: string): Promise<boolean> {
    try {
      await this.database.get<GroupEntity>(nameToCheck);
    } catch (e) {
      return false;
    }
    return true;
  }

  public async doesntHaveName(nameToCheck: string): Promise<boolean> {
    return !(await this.hasName(nameToCheck));
  }

  private constructor(private readonly database: Database) {}
}
