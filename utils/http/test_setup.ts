import { afterAll, afterEach, beforeAll } from "vitest";

import { initMock, resetHandlers, close } from "@mocks/index";

beforeAll(async () => {
  await initMock();
});

afterAll(async () => {
  await close();
});

afterEach(async () => {
  await resetHandlers();
});
