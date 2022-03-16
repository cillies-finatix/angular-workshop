import { Injectable } from '@angular/core';
import { LoggerService } from './logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  constructor(
    private readonly logger: LoggerService
  ) {
    this.logger.log('SampleService instantiated');
  }

  doSomething() {
    this.logger.log('SampleService does something');
  }
}
