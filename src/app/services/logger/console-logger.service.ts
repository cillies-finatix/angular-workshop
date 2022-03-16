import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable()
export class ConsoleLoggerService implements Logger {
  log(message?: string): void {
    console.log('ConsoleLoggerService: ' + message);
  }
}
