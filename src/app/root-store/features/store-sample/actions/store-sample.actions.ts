import { createAction, props } from '@ngrx/store';

export const loadStoreSamples = createAction(
  '[StoreSample] Load StoreSamples'
);

export const loadStoreSamplesSuccess = createAction(
  '[StoreSample] Load StoreSamples Success',
  props<{ data: string[] }>()
);

export const loadStoreSamplesFailure = createAction(
  '[StoreSample] Load StoreSamples Failure',
  props<{ error: any }>()
);
