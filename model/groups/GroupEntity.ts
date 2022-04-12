export type GroupEntity = {
  id: number;
  name: string;
  parentId: number | null /* null means `NoParent` */;
};

export default GroupEntity;
