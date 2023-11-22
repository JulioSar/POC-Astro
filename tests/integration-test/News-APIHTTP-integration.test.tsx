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
  deleteUserMock,
  addNewsDataMock,
  updateNewsMock,
  fetchDataNewsMock,
} from "tests/integration-test/mocks/handlers";

import NewsMother from "tests/backoffice/news/__mothers__/news.mother";
import newsService from "@/services/news";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("HTTP Test", () => {
  const news = NewsMother.random();
  test("should return users", async () => {
    // given
    server.use(fetchDataNewsMock);

    // when
    const data = await newsService.getAll();

    // then
    expect(data).toStrictEqual([
      expect.objectContaining({
        id: expect.any(String),
        title: "THIS IS A INT TEST",
        content:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        creation_date: new Date(2023, 11, 22),
        category: ["news", "tech"],
        type: "Featured",
        published: true,
      }),
    ]);
  });

  test("should return status 201 after adding user", async () => {
    // given
    server.use(addNewsDataMock);

    // when
    const addUser = await newsService.create(news, news.id);
    // then
    expect(addUser).toBeUndefined();
  });

  test("should return 200 after updating user", async () => {
    // given
    server.use(updateNewsMock);

    // when
    const updateUer = await newsService.update(news, news.id);
    console.log(updateUer);

    // then
    expect(updateUer).toBeUndefined();
  });

  test("should return 200 after deleting user", async () => {
    // given
    server.use(deleteUserMock);

    // when
    const deleteUser = await newsService.delete(news.id);

    // then
    expect(deleteUser).toBeUndefined();
  });

  // test("should return 404 after trying to update user", async () => {
  //   // given
  //   server.use(failUpdateUserMock);

  //   // then
  //   await expect(() => newsService.update(user,user.id)).rejects.toThrowError();
  // });
});
