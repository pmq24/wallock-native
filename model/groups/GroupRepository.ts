import DbInstance from "model/DbInstance";
import { Database } from "../DbTypes";
import { GroupCreationDto } from "./GroupCreationDto";
import GroupEntity from "./GroupEntity";

export default class GroupRepository {
  public constructor(dbName: string) {
    this.dbInstance = new DbInstance(dbName);
  }

  public async create(groupCreationDto: GroupCreationDto) {
    this.dbInstance.post({ _id: "", ...groupCreationDto });
  }

  private dbInstance: Database<GroupEntity>;
}
