import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromStoreSample from './reducers/store-sample.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreSampleEffects } from './effects/store-sample.effects';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(fromStoreSample.storeSampleFeatureKey, fromStoreSample.reducer),
    EffectsModule.forFeature([StoreSampleEffects])
  ]
})
export class StoreSampleModule { }
