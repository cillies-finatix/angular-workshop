import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPets from '../reducers/pets.reducer';

export const selectPetsState = createFeatureSelector<fromPets.State>(
  fromPets.petsFeatureKey
);
