import { Action, createReducer, on } from '@ngrx/store';
import * as StoreSampleActions from '../actions/store-sample.actions';

export const storeSampleFeatureKey = 'storeSample';

export interface State {
  samples: string[];

}

export const initialState: State = {
  samples: ["sample 1", "sample 2"]
};

export const reducer = createReducer(
  initialState,

  on(StoreSampleActions.loadStoreSamples, state => state),
  on(StoreSampleActions.loadStoreSamplesSuccess, (state, action) => state),
  on(StoreSampleActions.loadStoreSamplesFailure, (state, action) => state),

);
