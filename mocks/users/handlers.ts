import { rest } from "msw";

import { User } from "@src/users/entity";
import { USERS } from "@mocks/users/constants";

export const userHandlers = [
  rest.get<User[]>(
    import.meta.env.VITE_BASE_URL + import.meta.env.VITE_USERS_ENDPOINT,
    (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(USERS));
    }
  ),
];
