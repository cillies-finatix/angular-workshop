import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPageRoutingModule } from './details-page-routing.module';
import { DetailsPageComponent } from './details-page.component';
import { DetailsContainerModule } from '../../features/details-container/details-container.module';


@NgModule({
  declarations: [
    DetailsPageComponent
  ],
  imports: [
    CommonModule,
    DetailsPageRoutingModule,
    DetailsContainerModule,
  ]
})
export class DetailsPageModule { }
