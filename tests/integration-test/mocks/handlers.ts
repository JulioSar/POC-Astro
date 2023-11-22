import { rest } from "msw";
import { v4 } from "uuid";

export const fetchDataUserMock = rest.get(
  `${import.meta.env.PUBLIC_API_URL}/user`,
  async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: v4(),
            name: "Andy Sprague",
            mail: "asprague0@icio.us",
            profile_picture: "",
            status: true,
          },
        ],
      })
    );
  }
);

export const addUserDataMock = rest.put(
  `${import.meta.env.PUBLIC_API_URL}/user/:userId`,
  async (req, res, ctx) => {
    return res(ctx.status(201));
  }
);

export const updateUserMock = rest.patch(
  `${import.meta.env.PUBLIC_API_URL}/user/:userId`,
  (req, res, ctx) => {
    return res(ctx.status(200));
  }
);

export const deleteUserMock = rest.delete(
  `${import.meta.env.PUBLIC_API_URL}/user/:userId`,
  (req, res, ctx) => {
    return res(ctx.status(200));
  }
);

export const failUpdateUserMock = rest.patch(
  `${import.meta.env.PUBLIC_API_URL}/user/:userId`,
  (req, res, ctx) => {
    return res(ctx.status(404));
  }
);

// NEWS

export const fetchDataNewsMock = rest.get(
  `${import.meta.env.PUBLIC_API_URL}/news`,
  async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: v4(),
            title: "THIS IS A INT TEST",
            content:
              "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            creation_date: new Date(2023, 11, 22),
            category: ["news", "tech"],
            type: "Featured",
            published: true,
          },
        ],
      })
    );
  }
);

export const addNewsDataMock = rest.put(
  `${import.meta.env.PUBLIC_API_URL}/news/:newsId`,
  async (req, res, ctx) => {
    return res(ctx.status(201));
  }
);

export const updateNewsMock = rest.patch(
  `${import.meta.env.PUBLIC_API_URL}/news/:newsId`,
  (req, res, ctx) => {
    return res(ctx.status(200));
  }
);

export const deleteNewsMock = rest.delete(
  `${import.meta.env.PUBLIC_API_URL}/news/:newsId`,
  (req, res, ctx) => {
    return res(ctx.status(200));
  }
);

export const failUpdateNewsMock = rest.patch(
  `${import.meta.env.PUBLIC_API_URL}/news/:newsId`,
  (req, res, ctx) => {
    return res(ctx.status(404));
  }
);

export const handlers = [
  addUserDataMock,
  updateUserMock,
  fetchDataUserMock,
  deleteUserMock,
  fetchDataNewsMock,
  addNewsDataMock,
  updateNewsMock,
  deleteNewsMock,
  failUpdateNewsMock,
];
