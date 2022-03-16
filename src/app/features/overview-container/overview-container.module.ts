import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewContainerComponent } from './overview-container.component';



@NgModule({
  exports: [
    OverviewContainerComponent
  ],
  declarations: [
    OverviewContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OverviewContainerModule { }
