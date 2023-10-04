import { rest } from "msw";
import { v4 } from "uuid";

const userId = v4();
const userData = {
  name: "John Doe",
  email: "johndoe@example.com",
  status: true,
};

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

export const handlers = [
  addUserDataMock,
  updateUserMock,
  fetchDataUserMock,
  deleteUserMock,
];
