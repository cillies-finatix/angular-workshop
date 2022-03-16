import * as fromStoreSample from './store-sample.actions';

describe('loadStoreSamples', () => {
  it('should return an action', () => {
    expect(fromStoreSample.loadStoreSamples().type).toBe('[StoreSample] Load StoreSamples');
  });
});
