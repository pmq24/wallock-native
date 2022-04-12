import { AllDocsResponse, DbInstance } from "../DbTypes";
import GroupEntity from "./GroupEntity";

export default class GroupRepository {
  public constructor(private dbInstance: DbInstance) {}

  public async create(groupEntity: GroupEntity) {
    this.dbInstance.put(groupEntity);
  }
}
