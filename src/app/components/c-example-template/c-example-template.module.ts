import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CExampleTemplateComponent } from './c-example-template.component';



@NgModule({
  exports: [CExampleTemplateComponent],
  declarations: [
    CExampleTemplateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CExampleTemplateModule { }
