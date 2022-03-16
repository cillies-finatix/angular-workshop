import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsContainerRoutingModule } from './details-container-routing.module';
import { DetailsContainerComponent } from './details-container.component';


@NgModule({
  declarations: [
    DetailsContainerComponent
  ],
  imports: [
    CommonModule,
    DetailsContainerRoutingModule
  ]
})
export class DetailsContainerModule { }
