import { connectToDatabase, Database } from "model/database";
import { GroupCreationDto } from "./GroupCreationDto";
import GroupEntity from "./GroupEntity";

export default class GroupRepository {
  public constructor(databaseName: string) {
    this.database = connectToDatabase(databaseName);
  }

  public async create(groupCreationDto: GroupCreationDto) {
    this.database.post({ _id: "", ...groupCreationDto });
  }

  private database: Database<GroupEntity>;
}
