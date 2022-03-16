import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StoreSampleEffects } from './store-sample.effects';

describe('StoreSampleEffects', () => {
  let actions$: Observable<any>;
  let effects: StoreSampleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StoreSampleEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(StoreSampleEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
