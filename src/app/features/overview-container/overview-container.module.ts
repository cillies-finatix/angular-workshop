import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewContainerRoutingModule } from './overview-container-routing.module';
import { OverviewContainerComponent } from './overview-container.component';


@NgModule({
  declarations: [
    OverviewContainerComponent
  ],
  imports: [
    CommonModule,
    OverviewContainerRoutingModule
  ]
})
export class OverviewContainerModule { }
