export default class GroupEntity {
  public static readonly NoParent = null;

  public constructor(
    public id: Number,
    public name: String,
    public parentId: Number | null /* null means `NoParent` */
  ) {}
}
