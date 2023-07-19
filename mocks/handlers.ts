import { rest } from "msw";
import { baseUrl, usersEndpoint } from "./constants";
import { User } from "./interface";

export const handlers = [
  rest.get<User[]>(baseUrl + usersEndpoint, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: "Conrad Mugabe" },
        { id: 2, name: "Asingwire Brian" },
        { id: 3, name: "Osege David" },
      ])
    );
  }),
];
