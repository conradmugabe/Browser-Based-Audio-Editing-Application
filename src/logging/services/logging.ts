import {
  LogEntry,
  LogLevel,
  LoggingServiceProvider,
  logLevels,
} from "@logging/entities/logging-entities";

type Config = {
  logEntryLimit: number;
  enableConsoleLog: boolean;
};

type Log = string;

const initialConfig: Config = {
  logEntryLimit: 1,
  enableConsoleLog: false,
};

export class Logging {
  private _logEntries: LogEntry[] = [];
  constructor(
    private readonly loggingServiceProvider: LoggingServiceProvider,
    private readonly config: Config = initialConfig
  ) {}

  private _log = async (log: Log, logLevel: LogLevel) => {
    const _logEntry = { logLevel, log, date: new Date() };
    if (logLevel === logLevels.debug || this.config.enableConsoleLog) {
      console.log(JSON.stringify(_logEntry));
    } else {
      this._logEntries.push(_logEntry);
    }
    if (
      this._logEntries.length >= this.config.logEntryLimit ||
      logLevel === logLevels.error
    ) {
      const payload = this._logEntries;
      await this.loggingServiceProvider.batchLog(payload);
      this._logEntries = [];
    }
  };

  debug = async (log: Log) => {
    await this._log(log, logLevels.debug);
  };

  error = async (log: Log) => {
    await this._log(log, logLevels.error);
  };

  info = async (log: Log) => {
    await this._log(log, logLevels.info);
  };

  warn = async (log: Log) => {
    await this._log(log, logLevels.warn);
  };
}
