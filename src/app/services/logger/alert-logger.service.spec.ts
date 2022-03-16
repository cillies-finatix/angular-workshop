import { TestBed } from '@angular/core/testing';

import { AlertLoggerService } from './alert-logger.service';

describe('AlertLoggerService', () => {
  let service: AlertLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
