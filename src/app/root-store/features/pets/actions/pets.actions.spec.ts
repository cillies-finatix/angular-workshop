import * as fromPets from './pets.actions';

describe('loadPetss', () => {
  it('should return an action', () => {
    expect(fromPets.loadPetss().type).toBe('[Pets] Load Petss');
  });
});
