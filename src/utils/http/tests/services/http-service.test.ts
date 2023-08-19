import { afterEach, beforeAll, describe, expect, test } from "vitest";
import { MockProxy, mock, mockClear } from "vitest-mock-extended";

import { HttpService } from "@utils-http/services/http-service";
import { ApiClientServiceProvider } from "@utils-http/entities/http-entities";

const entity = { id: 1, name: "test" };

const getOneEntityMock = () => {
  return new Promise((resolve) => {
    resolve(entity);
  });
};

const returnPromiseVoidMock = (): Promise<void> => {
  return new Promise((resolve) => {
    resolve();
  });
};

describe("HttpService", () => {
  let apiClientServiceProvider: MockProxy<ApiClientServiceProvider>;

  beforeAll(() => {
    apiClientServiceProvider = mock<ApiClientServiceProvider>();
  });

  afterEach(() => {
    mockClear(apiClientServiceProvider);
  });

  describe("constructor", () => {
    test("should initialize with an apiClientServiceProvider", () => {
      const httpService = new HttpService({
        apiClientServiceProvider,
        endpoint: "test",
      });

      expect(httpService).toBeInstanceOf(HttpService);
    });
  });

  describe("create", () => {
    test("should call apiClientService.post with the correct endpoint and entity", async () => {
      const httpService = new HttpService({
        apiClientServiceProvider,
        endpoint: "test",
      });
      apiClientServiceProvider.post.mockImplementation(getOneEntityMock);

      const response = await httpService.create(entity);

      expect(response).toEqual(entity);
      expect(apiClientServiceProvider.post).toHaveReturned();
      expect(apiClientServiceProvider.post).toHaveBeenCalled();
      expect(apiClientServiceProvider.post).toHaveBeenCalledWith(
        "test",
        entity
      );
      expect(apiClientServiceProvider.post).toHaveReturnedWith(response);
    });
  });

  describe("delete", () => {
    test("should call apiClientService.delete with the correct endpoint and id", async () => {
      const httpService = new HttpService({
        apiClientServiceProvider,
        endpoint: "test",
      });
      apiClientServiceProvider.delete.mockImplementation(returnPromiseVoidMock);

      await httpService.delete(1);

      expect(apiClientServiceProvider.delete).toHaveReturned();
      expect(apiClientServiceProvider.delete).toHaveBeenCalled();
      expect(apiClientServiceProvider.delete).toHaveBeenCalledWith("test/1");
    });

    test("should throw an error if apiClientService.get throws an error", async () => {
      const httpService = new HttpService({
        apiClientServiceProvider,
        endpoint: "test",
      });
      const error = new Error("test");
      apiClientServiceProvider.delete.mockRejectedValue(error);

      try {
        await httpService.delete(1);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("getMany", () => {
    const entities = [entity];
    const getManyEntitiesMock = () => {
      return new Promise((resolve) => {
        resolve(entities);
      });
    };

    test("should call apiClientService.get with the correct endpoint", async () => {
      const httpService = new HttpService({
        apiClientServiceProvider,
        endpoint: "test",
      });
      apiClientServiceProvider.get.mockImplementation(getManyEntitiesMock);

      const response = await httpService.getMany();

      expect(response).toEqual(entities);
      expect(apiClientServiceProvider.get).toHaveReturned();
      expect(apiClientServiceProvider.get).toHaveBeenCalled();
      expect(apiClientServiceProvider.get).toHaveBeenCalledWith("test");
      expect(apiClientServiceProvider.get).toHaveReturnedWith(response);
    });

    test("should throw an error if the apiClientService.get throws an error", async () => {
      const httpService = new HttpService({
        apiClientServiceProvider,
        endpoint: "test",
      });
      const error = new Error("test");
      apiClientServiceProvider.get.mockRejectedValue(error);

      try {
        await httpService.getMany();
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("getOne", () => {
    test("should call apiClientService.get with the correct endpoint and id", async () => {
      const httpService = new HttpService({
        apiClientServiceProvider,
        endpoint: "test",
      });
      apiClientServiceProvider.get.mockImplementation(getOneEntityMock);

      const response = await httpService.getOne(1);

      expect(response).toEqual(entity);
      expect(apiClientServiceProvider.get).toHaveReturned();
      expect(apiClientServiceProvider.get).toHaveReturnedWith(response);
      expect(apiClientServiceProvider.get).toHaveBeenCalledWith("test/1");
    });

    test("should throw an error if the apiClientService.get throws an error", async () => {
      const httpService = new HttpService({
        apiClientServiceProvider,
        endpoint: "test",
      });
      const error = new Error("test");
      apiClientServiceProvider.get.mockRejectedValue(error);

      try {
        await httpService.getOne(1);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });

  describe("update", () => {
    test("should call apiClientService.put with the correct endpoint and entity", async () => {
      const httpService = new HttpService({
        apiClientServiceProvider,
        endpoint: "test",
      });
      apiClientServiceProvider.put.mockImplementation(getOneEntityMock);

      const response = await httpService.update(entity);

      expect(response).toEqual(entity);
      expect(apiClientServiceProvider.put).toHaveReturned();
      expect(apiClientServiceProvider.put).toHaveReturnedWith(response);
      expect(apiClientServiceProvider.put).toHaveBeenCalledWith(
        "test/1",
        entity
      );
    });

    test("should throw an error if the apiClientService.put throws an error", async () => {
      const httpService = new HttpService({
        apiClientServiceProvider,
        endpoint: "test",
      });
      const error = new Error("test");
      apiClientServiceProvider.put.mockRejectedValue(error);

      try {
        await httpService.update(entity);
      } catch (e) {
        expect(e).toEqual(error);
      }
    });
  });
});
