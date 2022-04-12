export type GroupEntity = {
  _id: string;
  name: string;
  parentId: number | null /* null means `NoParent` */;
};

export default GroupEntity;
