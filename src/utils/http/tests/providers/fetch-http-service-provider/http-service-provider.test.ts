import { describe, expect, test } from "vitest";

import { FetchClientServiceProvider } from "@utils-http/providers/fetch-http-service-provider/http-service-provider";

describe("FetchHttpServiceProvider", () => {
  const httpServiceProvider = new FetchClientServiceProvider({
    baseUrl: "http://test.com",
  });

  describe("constructor", () => {
    test("should initiate fetch http service provider with config object", () => {
      expect(httpServiceProvider).toBeInstanceOf(FetchClientServiceProvider);
    });
  });

  // describe("post", () => {
  //   test("should return the correct response", async () => {
  //     const name = "test";
  //     const response = await httpServiceProvider.post("/test-route", { name });

  //     expect(response).toEqual({ id: 1, name });
  //   });
  // });
});
