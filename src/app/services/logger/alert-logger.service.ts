import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable()
export class AlertLoggerService implements Logger {
  log(message?: string): void {
    if (message) {
      alert('AlertLoggerService: ' + message);
    }
  }
}
