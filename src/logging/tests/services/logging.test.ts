import { afterEach, beforeAll, describe, expect, test, vi } from "vitest";
import { MockProxy, mock, mockClear } from "vitest-mock-extended";

import { Logging } from "@logging/services/logging";
import { LoggingServiceProvider } from "@logging/entities/logging-entities";

describe("Logging Use Cases", () => {
  let loggingServiceProvider: MockProxy<LoggingServiceProvider>;

  beforeAll(() => {
    loggingServiceProvider = mock<LoggingServiceProvider>();
  });

  afterEach(() => {
    mockClear(loggingServiceProvider);
  });

  test("should initialize logging with only a logging service provider", () => {
    const logging = new Logging(loggingServiceProvider);
    expect(logging).toBeInstanceOf(Logging);
  });

  test("should call the info function in logging", async () => {
    const logging = new Logging(loggingServiceProvider, {
      logEntryLimit: 1,
      enableConsoleLog: false,
    });

    const log = "test log";
    const date = new Date(2000, 1, 1, 13);
    vi.setSystemTime(date);

    await logging.info(log);

    expect(loggingServiceProvider.batchLog).toHaveBeenCalled();
    expect(loggingServiceProvider.batchLog).toBeCalledTimes(1);
    expect(loggingServiceProvider.batchLog).toHaveBeenCalledWith([
      { logLevel: "info", log, date },
    ]);
  });

  test("should display the log entry in the console if enableConsoleLog is enabled", async () => {
    const logging = new Logging(loggingServiceProvider, {
      logEntryLimit: 10,
      enableConsoleLog: true,
    });

    const log = "test log";
    const consoleSpy = vi.spyOn(console, "log");
    const date = new Date(2000, 1, 1, 13);

    await logging.info(log);

    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toBeCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(
      JSON.stringify({ logLevel: "info", log, date })
    );
  });

  test("should persist log entries if the log entry limit is not reached", async () => {
    const logging = new Logging(loggingServiceProvider, {
      logEntryLimit: 3,
      enableConsoleLog: false,
    });

    const log_1 = "test log 1";
    const log_2 = "test log 2";
    const log_3 = "test log 3";
    const logLevel = "info";
    const date = new Date(2000, 1, 1, 13);
    vi.setSystemTime(date);

    await logging.info("test log 1");
    await logging.info("test log 2");
    await logging.info("test log 3");

    expect(loggingServiceProvider.batchLog).toHaveBeenCalled();
    expect(loggingServiceProvider.batchLog).toBeCalledTimes(1);
    expect(loggingServiceProvider.batchLog).toHaveBeenCalledWith([
      { logLevel, log: log_1, date },
      { logLevel, log: log_2, date },
      { logLevel, log: log_3, date },
    ]);
  });

  test("should send logs in batches every time log entries reach the log entry limit", async () => {
    const logging = new Logging(loggingServiceProvider, {
      logEntryLimit: 2,
      enableConsoleLog: false,
    });

    await logging.info("test log 1");
    await logging.info("test log 2");
    await logging.info("test log 3");
    await logging.info("test log 4");

    expect(loggingServiceProvider.batchLog).toBeCalledTimes(2);
  });

  test("should not persist debug logs", async () => {
    const logging = new Logging(loggingServiceProvider, {
      logEntryLimit: 2,
      enableConsoleLog: false,
    });

    await logging.debug("test debug log 1");
    await logging.debug("test debug log 2");
    await logging.debug("test debug log 3");

    expect(loggingServiceProvider.batchLog).not.toHaveBeenCalled();
    expect(loggingServiceProvider.batchLog).toBeCalledTimes(0);
  });

  test("should display debug logs on the console, even when enableConsoleLog is false", async () => {
    const logging = new Logging(loggingServiceProvider, {
      logEntryLimit: 2,
      enableConsoleLog: false,
    });

    const log_1 = "test debug log 1";
    const log_2 = "test debug log 2";
    const log_3 = "test debug log 3";
    const consoleSpy = vi.spyOn(console, "log");

    await logging.debug(log_1);
    await logging.debug(log_2);
    await logging.debug(log_3);

    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toBeCalledTimes(3);
  });

  test("should trigger the batchLog function in logging service provider if log level is error even though log entry limit has not been reached", async () => {
    const logging = new Logging(loggingServiceProvider, {
      logEntryLimit: 10,
      enableConsoleLog: false,
    });

    const logLevel = "info";
    const log_1 = "test log 1";
    const log_2 = "test log 2";
    const error_log = "test error log";
    const date = new Date(2000, 1, 1, 13);
    vi.setSystemTime(date);

    await logging.info(log_1);
    await logging.info(log_2);
    await logging.error(error_log);

    expect(loggingServiceProvider.batchLog).toHaveBeenCalled();
    expect(loggingServiceProvider.batchLog).toBeCalledTimes(1);
    expect(loggingServiceProvider.batchLog).toHaveBeenCalledWith([
      { logLevel, log: log_1, date },
      { logLevel, log: log_2, date },
      { logLevel: "error", log: error_log, date },
    ]);
  });

  test("should call the warn function in logging", async () => {
    const logging = new Logging(loggingServiceProvider, {
      logEntryLimit: 1,
      enableConsoleLog: false,
    });

    const log = "test log";
    const date = new Date(2000, 1, 1, 13);
    vi.setSystemTime(date);

    await logging.warn(log);

    expect(loggingServiceProvider.batchLog).toHaveBeenCalled();
    expect(loggingServiceProvider.batchLog).toBeCalledTimes(1);
    expect(loggingServiceProvider.batchLog).toHaveBeenCalledWith([
      { logLevel: "warn", log, date },
    ]);
  });
});
