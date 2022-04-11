type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type GroupId = `G${Digit}${Digit}`;

export default class GroupEntity {
  public constructor(
    public id: GroupId,
    public name: String,
    public parentId: GroupId
  ) {}
}
