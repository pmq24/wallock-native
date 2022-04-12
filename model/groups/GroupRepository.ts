import { DbInstance } from "../DbTypes";
import { GroupCreationDto } from "./GroupCreationDto";

export default class GroupRepository {
  public constructor(private dbInstance: DbInstance) {}

  public async create(groupCreationDto: GroupCreationDto) {
    this.dbInstance.post(groupCreationDto);
  }
}
