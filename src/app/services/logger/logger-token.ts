import { InjectionToken } from "@angular/core";
import { Logger } from './logger';

export const LOGGER_TOKEN = new InjectionToken<Logger>('logger instance');
