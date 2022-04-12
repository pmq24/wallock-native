import GroupEntity from "./GroupEntity";

export type GroupCreationDto = Pick<GroupEntity, "name" | "parentId">;
