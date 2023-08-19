import axios from "axios";
import { describe, expect, test } from "vitest";

import { AxiosClientServiceProvider } from "@utils-http/providers/axios-http-service-provider/http-service-provider";
import { baseTestUrl, failTestUrl, testUrl } from "@mocks/utils/http/handlers";

describe("AxiosHttpServiceProvider", () => {
  const axiosInstance = axios.create({
    baseURL: baseTestUrl,
  });

  const httpServiceProvider = new AxiosClientServiceProvider({
    axiosInstance,
  });

  describe("constructor", () => {
    test("should initiate with an AxiosInstance", () => {
      expect(httpServiceProvider).toBeInstanceOf(AxiosClientServiceProvider);
    });
  });

  describe("post", () => {
    test("should return the correct response", async () => {
      const name = "test";
      const response = await httpServiceProvider.post(testUrl, { name });

      expect(response).toEqual({ id: 1, name });
    });

    test("should throw an error if the request fails", async () => {
      const name = "test";

      httpServiceProvider.post(failTestUrl, { name }).catch((error) => {
        expect(error.message).toBe("Request failed with status code 500");
      });
    });
  });

  describe("get", () => {
    test("should return the correct response", async () => {
      const response = await httpServiceProvider.get(testUrl);

      expect(response).toEqual({ id: 1, name: "test" });
    });

    test("should throw an error if the request fails", async () => {
      httpServiceProvider.get(failTestUrl).catch((error) => {
        expect(error.message).toBe("Request failed with status code 500");
      });
    });
  });

  describe("put", () => {
    test("should return the correct response", async () => {
      const name = "test";
      const response = await httpServiceProvider.put(testUrl, { name });

      expect(response).toEqual({ id: 1, name });
    });

    test("should throw an error if the request fails", async () => {
      const name = "test";

      httpServiceProvider.put(failTestUrl, { name }).catch((error) => {
        expect(error.message).toBe("Request failed with status code 500");
      });
    });
  });

  describe("delete", () => {
    test("should return the correct response", async () => {
      const response = await httpServiceProvider.delete(testUrl);

      expect(response).toEqual({ id: 1, name: "test" });
    });

    test("should throw an error if the request fails", async () => {
      httpServiceProvider.delete(failTestUrl).catch((error) => {
        expect(error.message).toBe("Request failed with status code 500");
      });
    });
  });
});
