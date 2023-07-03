import { rest } from "msw";

type User = { id: number; name: string };

export const getUsers = rest.get<User[]>(
  "https://jsonplaceholder.typicode.com/users",
  (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: "User 1" },
        { id: 2, name: "User 2" },
        { id: 3, name: "User 3" },
      ])
    );
  }
);

export const getUsersError = rest.get<User[]>(
  "https://jsonplaceholder.typicode.com/users",
  (_, res, ctx) => {
    return res(ctx.status(500));
  }
);
