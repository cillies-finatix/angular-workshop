import { Action, createReducer, on } from '@ngrx/store';
import * as PetsActions from '../actions/pets.actions';

export const petsFeatureKey = 'pets';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(PetsActions.loadPetss, state => state),

);
