import { TestBed } from '@angular/core/testing';

import { SampleWithTokenService } from './sample-with-token.service';

describe('SampleWithTokenService', () => {
  let service: SampleWithTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleWithTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
