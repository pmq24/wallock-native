export default class GroupEntity {
  public constructor(
    public id: Number,
    public name: String,
    public parentId: Number | null /* null means `NoParent` */
  ) {}
}
