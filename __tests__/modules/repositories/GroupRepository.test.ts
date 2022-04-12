import GroupRepository from "model/groups/GroupRepository";
import GroupEntity from "model/groups/GroupEntity";
import { GroupCreationDto } from "model/groups/GroupCreationDto";

const PouchDB = require("pouchdb");

const testDbInstance: PouchDB.Database = new PouchDB("wallock-test-db");
const testGroupRepository: GroupRepository = new GroupRepository(
  testDbInstance
);

beforeAll(async () => {
  expect(testDbInstance).toBeDefined();
  expect(testGroupRepository).toBeDefined();
});

afterAll(async () => {
  testDbInstance.destroy();
});

test("Create group", async () => {
  const groupCreationDto: GroupCreationDto = {
    name: "Test group",
    parentId: null,
  };

  await testGroupRepository.create(groupCreationDto);

  const allDocs: PouchDB.Core.AllDocsResponse<GroupEntity> =
    await testDbInstance.allDocs({ include_docs: true });

  const createdGroupEntity: GroupEntity | undefined = allDocs.rows[0]?.doc;

  expect(allDocs.total_rows).toBe(1);
  expect(createdGroupEntity).toBeDefined();
  expect(createdGroupEntity?.name).toBe("Test group");
  expect(createdGroupEntity?.parentId).toBe(null);
});

export {};
