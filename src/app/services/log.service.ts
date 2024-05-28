import { Injectable, InjectionToken } from "@angular/core";

// export const LOG_SERVICE = new OpaqueToken('logger');
export const LOG_SERVICE = new InjectionToken('logger');

export enum LogLevel {
  DEBUG,
  INFO,
  ERROR,
}
/**
 * The service outputs messages of varying severity levels to the browser's JavaScript console.
 */
@Injectable(
  { providedIn: "root" }
)
export class LogService {
  minimumLevel: LogLevel = LogLevel.INFO;

  logInfoMessage(message: string) {
    this.logMessage(LogLevel.INFO, message);
  }

  logDebugMessage(message: string) {
    this.logMessage(LogLevel.DEBUG, message);
  }
  logErrorMessage(message: string) {
    this.logMessage(LogLevel.ERROR, message);
  }

  logMessage(level: LogLevel, message: string) {
    if (level >= this.minimumLevel) {
      console.log(`Message (${LogLevel[level]}): ${message}`);
    }
  }
}

@Injectable()
export class SpecialLogService extends LogService {
  constructor() {
    super();
    this.minimumLevel = LogLevel.DEBUG;
  }

  override logMessage(level: LogLevel, message: string) {
    if (level >= this.minimumLevel) {
      console.log(`Special Message (${LogLevel[level]}): ${message}`);
    }
  }
}
