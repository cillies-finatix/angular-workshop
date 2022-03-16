import * as fromStoreSample from '../reducers/store-sample.reducer';
import { selectStoreSampleState } from './store-sample.selectors';

describe('StoreSample Selectors', () => {
  it('should select the feature state', () => {
    const result = selectStoreSampleState({
      [fromStoreSample.storeSampleFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
