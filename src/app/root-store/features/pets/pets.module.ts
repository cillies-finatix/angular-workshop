import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromPets from './reducers/pets.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PetsEffects } from './effects/pets.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPets.petsFeatureKey, fromPets.reducer),
    EffectsModule.forFeature([PetsEffects])
  ]
})
export class PetsModule { }
