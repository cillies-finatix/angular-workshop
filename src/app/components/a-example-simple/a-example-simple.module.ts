import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AExampleSimpleComponent } from './a-example-simple.component';



@NgModule({
  exports: [AExampleSimpleComponent],
  declarations: [
    AExampleSimpleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AExampleSimpleModule { }
