import { rest } from "msw";

export const baseTestUrl = "http://test.com";
export const testUrl = "http://test.com/test-route";
export const failTestUrl = "http://test.com/fail-test-route";

export const httpHandlers = [
  rest.post(testUrl, async (req, res, ctx) => {
    const response = await req.json();
    return res(
      ctx.json({
        id: 1,
        ...response,
      })
    );
  }),

  rest.get(testUrl, async (_, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        name: "test",
      })
    );
  }),

  rest.put(testUrl, async (req, res, ctx) => {
    const response = await req.json();
    return res(
      ctx.json({
        id: 1,
        ...response,
      })
    );
  }),

  rest.delete(testUrl, async (_, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        name: "test",
      })
    );
  }),

  rest.get(failTestUrl, async (_, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({
        message: "Internal Server Error",
      })
    );
  }),

  rest.post(failTestUrl, async (_, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({
        message: "Internal Server Error",
      })
    );
  }),

  rest.put(failTestUrl, async (_, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({
        message: "Internal Server Error",
      })
    );
  }),

  rest.delete(failTestUrl, async (_, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({
        message: "Internal Server Error",
      })
    );
  }),
];
