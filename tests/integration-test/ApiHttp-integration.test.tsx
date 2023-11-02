import {
  afterAll,
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
} from "vitest";
import { server } from "./mocks/server";
import {
  fetchDataUserMock,
  addUserDataMock,
  updateUserMock,
  deleteUserMock,
  failUpdateUserMock,
} from "tests/integration-test/mocks/handlers";

import UserMother from "tests/backoffice/users/__mothers__/user.mother";
import userService from "@/services/users2";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("HTTP Test", () => {
  const user = UserMother.random();
  test("should return users", async () => {
    // given
    server.use(fetchDataUserMock);

    // when
    const data = await userService.getAll();

    // then
    expect(data).toStrictEqual([
      expect.objectContaining({
        id: expect.any(String),
        name: "Andy Sprague",
        mail: "asprague0@icio.us",
        profile_picture: "",
        status: true,
      }),
    ]);
  });

  test("should return status 201 after adding user", async () => {
    // given
    server.use(addUserDataMock);

    // when
    const addUser = await userService.create(user, user.id);
    // then
    expect(addUser).toBeUndefined();
  });

  test("should return 200 after updating user", async () => {
    // given
    server.use(updateUserMock);

    // when
    const updateUer = await userService.update(user, user.id);

    // then
    expect(updateUer).toBeUndefined();
  });

  test("should return 200 after deleting user", async () => {
    // given
    server.use(deleteUserMock);

    // when
    const deleteUser = await userService.delete(user.id);

    // then
    expect(deleteUser).toBeUndefined();
  });

  // test("should return 404 after trying to update user", async () => {
  //   // given
  //   server.use(failUpdateUserMock);

  //   // then
  //   await expect(() => userService.update(user,user.id)).rejects.toThrowError();
  // });
});
