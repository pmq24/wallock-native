import Vault from "../../model/Vault";

let testVault: Vault | undefined = undefined;

beforeAll(async (done) => {
  testVault = await Vault.init("test-database");
  done();
});

afterAll(async (done) => {
  await testVault!.destroy();
  done();
});

test("When the vault creates new group, then the vault should return it", async () => {
  const constTestVault: Vault = testVault!;

  const groupEntity = await constTestVault.groups.create({
    name: "Test group",
    parentName: "Income",
  });

  expect(groupEntity).toBeDefined();
  expect(groupEntity._id).toEqual("Test group");
  expect(groupEntity.parentId).toEqual("Income");
});

export {};
