import * as fromPets from '../reducers/pets.reducer';
import { selectPetsState } from './pets.selectors';

describe('Pets Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPetsState({
      [fromPets.petsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
