import { rest } from "msw";

export const authHandlers = [
  rest.post("/login", async (req, res, ctx) => {
    const response = await req.json();
    return res(
      ctx.json({
        id: 1,
        ...response,
      })
    );
  }),

  rest.post("/login-with-provider", async (req, res, ctx) => {
    const response = await req.json();
    return res(
      ctx.json({
        id: 1,
        ...response,
      })
    );
  }),
];
