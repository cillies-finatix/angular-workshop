import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromStoreSample from './reducers/store-sample.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreSampleEffects } from './effects/store-sample.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromStoreSample.storeSampleFeatureKey, fromStoreSample.reducer),
    EffectsModule.forFeature([StoreSampleEffects])
  ]
})
export class StoreSampleModule { }
