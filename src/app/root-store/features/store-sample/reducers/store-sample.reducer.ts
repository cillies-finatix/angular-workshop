import { Action, createReducer, on } from '@ngrx/store';
import * as StoreSampleActions from '../actions/store-sample.actions';

export const storeSampleFeatureKey = 'storeSample';

export interface State {
  samples: string[];
  loading: boolean;
}

export const initialState: State = {
  samples: ["sample 1", "sample 2"],
  loading: false,
};

export const reducer = createReducer(
  initialState,

  on(StoreSampleActions.loadStoreSamples, state => ({...state, loading: true})),
  on(StoreSampleActions.loadStoreSamplesSuccess, (state, action) => ({...state, loading: false, samples: action.data })),
  on(StoreSampleActions.loadStoreSamplesFailure, (state, action) => ({...state, loading: false})),

);
