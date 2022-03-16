import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewPageRoutingModule } from './overview-page-routing.module';
import { OverviewPageComponent } from './overview-page.component';
import { OverviewContainerModule } from '../../features/overview-container/overview-container.module';


@NgModule({
  declarations: [
    OverviewPageComponent
  ],
  imports: [
    CommonModule,
    OverviewPageRoutingModule,
    OverviewContainerModule
  ]
})
export class OverviewPageModule { }
