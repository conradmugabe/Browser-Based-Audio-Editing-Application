import "@testing-library/jest-dom";

import { close, initMock, resetHandlers } from "./mocks";

beforeAll(async () => await initMock());

afterEach(async () => await resetHandlers());

afterAll(async () => await close());
