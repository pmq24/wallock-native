import { connectToDatabase, Database, FindResponse } from "model/database";
import { GroupCreationDto } from "model/groups/GroupCreationDto";
import GroupEntity from "model/groups/GroupEntity";
import GroupRepository from "model/groups/GroupRepository";

const DATABASE_NAME = "test-db";

let groupRepository: GroupRepository | null = null;
let database: Database<GroupEntity> | null = null;

beforeAll(async () => {
  groupRepository = new GroupRepository(DATABASE_NAME);
  database = connectToDatabase<GroupEntity>(DATABASE_NAME);
});

afterAll(async () => {
  database!.destroy();
});

test("Create group", async () => {
  if (groupRepository === null || database === null) {
    fail("`groupRepository` or `database` is null");
  } else {
    const NAME = "Group 1";
    const PARENT_ID = null;

    const groupCreationDto: GroupCreationDto = {
      name: NAME,
      parentId: PARENT_ID,
    };

    await groupRepository.create(groupCreationDto);

    const findResponse: FindResponse<GroupEntity> = await database.find({
      selector: { name: { $eq: NAME } },
    });

    expect(findResponse.docs.length).toBeGreaterThan(0);

    const groupEntity: GroupEntity = findResponse.docs[0];

    expect(groupEntity).toBeDefined();
    expect(groupEntity.name).toEqual(NAME);
    expect(groupEntity.parentId).toEqual(PARENT_ID);
  }
});

export {};
