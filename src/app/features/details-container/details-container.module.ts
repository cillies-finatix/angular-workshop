import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsContainerComponent } from './details-container.component';



@NgModule({
  exports: [
    DetailsContainerComponent
  ],
  declarations: [
    DetailsContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DetailsContainerModule { }
