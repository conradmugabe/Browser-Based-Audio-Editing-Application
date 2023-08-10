import { describe, expect, test } from "vitest";

import { Logging } from "@logging/services/logging";

describe("Logging", () => {
  test("should successfully create an instance", () => {
    const logging = new Logging();

    expect(logging).toBeInstanceOf(Logging);
  });
});
