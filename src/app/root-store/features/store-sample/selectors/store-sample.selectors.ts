import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStoreSample from '../reducers/store-sample.reducer';

export const selectStoreSampleState = createFeatureSelector<fromStoreSample.State>(
  fromStoreSample.storeSampleFeatureKey
);

export const selectStoreSamples = createSelector(selectStoreSampleState, state => state.samples);
export const selectStoreSamplesLoading = createSelector(selectStoreSampleState, state => state.loading);
