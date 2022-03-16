import { Inject, Injectable } from '@angular/core';
import { Logger } from './logger/logger';
import { LOGGER_TOKEN } from './logger/logger-token';

@Injectable({
  providedIn: 'root'
})
export class SampleWithTokenService {
  constructor(
    @Inject(LOGGER_TOKEN) private readonly logger: Logger
  ) {
    this.logger.log('SampleWithTokenService instantiated');
  }

  doSomething() {
    this.logger.log('SampleWithTokenService does something');
  }
}
