import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EExamplePipesComponent } from './e-example-pipes.component';
import { ScalePipe } from './scale.pipe';



@NgModule({
  declarations: [
    EExamplePipesComponent,
    ScalePipe
  ],
  imports: [
    CommonModule
  ]
})
export class EExamplePipesModule { }
