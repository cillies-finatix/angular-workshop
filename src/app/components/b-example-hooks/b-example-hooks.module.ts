import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BExampleHooksComponent } from './b-example-hooks.component';



@NgModule({
  exports: [BExampleHooksComponent],
  declarations: [
    BExampleHooksComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BExampleHooksModule { }
