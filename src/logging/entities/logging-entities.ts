export interface LoggingServiceProvider {
  batchLog(logEntries: LogEntry[]): Promise<void>;
}

export type Log = string;

export const logLevels = {
  debug: "debug",
  error: "error",
  info: "info",
  warn: "warn",
} as const;

export type LogLevel = (typeof logLevels)[keyof typeof logLevels];

export type LogEntry = { logLevel: LogLevel; log: Log; date: Date };
